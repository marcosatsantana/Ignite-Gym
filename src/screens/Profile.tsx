import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Center, Heading, ScrollView, Skeleton, Text, VStack } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';

const PHOTO_SIZE = 33;

export default function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil' />
            <ScrollView>
                <Center mt={6} px={10}>
                    {
                        photoIsLoading ?
                            <Skeleton
                                w={PHOTO_SIZE}
                                h={PHOTO_SIZE}
                                rounded='full'
                                startColor='gray.500'
                                endColor='gray.400'
                            />
                            :
                            <UserPhoto
                                source={{ uri: 'https://github.com/marcosxk122.png' }}
                                alt='Foto do usuario'
                                size={PHOTO_SIZE}
                            />
                    }
                    <TouchableOpacity>
                        <Text color='green.500' fontWeight='bold' fontSize='md' mt={2} mb={8}>
                            Alterar foto
                        </Text>
                    </TouchableOpacity>
                    <Input
                        bg='gray.600'
                        placeholder='Nome'
                    />
                    <Input
                        bg='gray.600'
                        placeholder='Email'
                        value='marcosxk@gmail.com'
                        isDisabled
                    />
                </Center>
                <VStack px={10} mt={12} mb={9}>
                    <Heading color='gray.200' fontSize='md' mb={2}>Alterar senha</Heading>
                    <Input
                        bg='gray.600'
                        placeholder='Senha antiga'
                        secureTextEntry
                    />
                    <Input
                        bg='gray.600'
                        placeholder='Nova senha'
                        secureTextEntry
                    />
                    <Input
                        bg='gray.600'
                        placeholder='Confirme nova senha'
                        secureTextEntry
                    />
                    <Button title='Atualizar' mt={4}/>
                </VStack>
            </ScrollView>
        </VStack>
    )
};
