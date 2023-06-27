import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';
import LogoSvg from '@assets/logo.svg';
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'
import BackgroundIMG from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native'

export function SignIn() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleNewAcconunt() {
        navigation.navigate('signUp');
    }
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <VStack flex={1} px={10} pb={16}>
                <Image
                    source={BackgroundIMG}
                    defaultSource={BackgroundIMG}
                    alt='Pessoas treinando'
                    resizeMode='contain'
                    position='absolute'
                />
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
                    <Input
                        placeholder='E-mail'
                        keyboardType='email-address'
                        autoCapitalize='none'
                    />
                    <Input
                        placeholder='Senha'
                        secureTextEntry
                    />
                    <Button title='Acessar' />
                </Center>
                <Center mt={24}>
                    <Text color='gray.100' mb={3} fontSize='sm' fontFamily='body'>Ainda não tem acesso?</Text>
                    <Button title='Criar conta' variant='outline' onPress={handleNewAcconunt} />
                </Center>
            </VStack>
        </ScrollView>
    )
};
