import { VStack, Image, Text, Center, Heading, ScrollView, useToast } from 'native-base';
import { useForm, Controller } from 'react-hook-form'
import LogoSvg from '@assets/logo.svg';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import BackgroundIMG from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native'
import { useAuth } from '@hooks/useAuth';
import { AppError } from '@utils/AppError';
import { useState } from 'react';

type FormData = {
    email: string,
    password: string
}

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();
    const toast = useToast();
    const navigation = useNavigation<AuthNavigatorRoutesProps>();
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>();

    function handleNewAcconunt() {
        navigation.navigate('signUp');
    }

    async function handleSignIn({ email, password }: FormData) {
        try {
            setIsLoading(true);
            await signIn(email, password);
        } catch (error) {
            const isAppError = error instanceof AppError;
            const title = isAppError ? error.message : 'Não foi possivel entrar. Tente novamente mais tarde';
            toast.show({
                title,
                placement: 'top',
                bgColor: 'red.500'
            })
            setIsLoading(false);
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} pb={16}>
                <Image
                    source={BackgroundIMG}
                    width='100%'
                    defaultSource={BackgroundIMG}
                    alt='Pessoas treinando'
                    position='absolute'
                />
                <VStack px={10}>
                    <Center my={24}>
                        <LogoSvg />
                        <Text color='gray.100' fontSize='sm'>
                            Treine sua mente e o seu corpo
                        </Text>
                    </Center>
                    <Center>
                        <Heading color='gray.100' fontSize='xl' mb={6} fontFamily='heading'>
                            Acesse sua conta
                        </Heading>

                        <Controller
                            control={control}
                            name='email'
                            rules={{ required: 'Favor, informar e-mail.' }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    placeholder='E-mail'
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    onChangeText={onChange}
                                    errorMessage={errors.email?.message}
                                />
                            )}
                        />

                        <Controller
                            control={control}
                            name='password'
                            rules={{ required: 'Favor, informe a senha.' }}
                            render={({ field: { onChange } }) => (
                                <Input
                                    placeholder='Senha'
                                    secureTextEntry
                                    onChangeText={onChange}
                                    errorMessage={errors.password?.message}
                                />
                            )}
                        />

                        <Button title='Acessar' isLoading={isLoading} onPress={handleSubmit(handleSignIn)} />
                    </Center>
                    <Center mt={24}>
                        <Text color='gray.100' mb={3} fontSize='sm' fontFamily='body'>Ainda não tem acesso?</Text>
                        <Button title='Criar conta' variant='outline' onPress={handleNewAcconunt} />
                    </Center>
                </VStack>
            </VStack>
        </ScrollView>
    )
};
