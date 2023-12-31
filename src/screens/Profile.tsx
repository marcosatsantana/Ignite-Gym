import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { ScreenHeader } from '@components/ScreenHeader';
import * as ImagePiker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { UserPhoto } from '@components/UserPhoto';
import { Center, Heading, ScrollView, Skeleton, Text, VStack, useToast } from 'native-base';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native';


const PHOTO_SIZE = 33;

export default function Profile() {
    const [photoIsLoading, setPhotoIsLoading] = useState(false);
    const [userPhoto, setUserPhoto] = useState('https://github.com/marcosxk122.png');
    const toast = useToast();

    async function handleUserPhotoSelect() {
        setPhotoIsLoading(true);
        try {
            const photoSelected = await ImagePiker.launchImageLibraryAsync({
                mediaTypes: ImagePiker.MediaTypeOptions.Images,
                quality: 1,
                aspect: [4, 4],
                allowsEditing: true,
                selectionLimit: 1
            });
            if (photoSelected.canceled) return;

            if (photoSelected.assets[0].uri) {
                const photoInfo = await FileSystem.getInfoAsync(photoSelected.assets[0].uri);

                if (photoInfo.exists && (photoInfo.size / 1024 / 1024) > 1) {
                    return toast.show({
                        title: 'Essa imagem é muito grande, escolha outra foto',
                        placement: 'top',
                        bgColor: 'red.500'
                    })
                }
                setUserPhoto(photoSelected.assets[0].uri);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setPhotoIsLoading(false);
        }
    }
    return (
        <VStack flex={1}>
            <ScreenHeader title='Perfil' />
            <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
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
                                source={{ uri: userPhoto }}
                                alt='Foto do usuario'
                                size={PHOTO_SIZE}
                            />
                    }
                    <TouchableOpacity onPress={handleUserPhotoSelect}>
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
                        isDisabled
                    />
                    <Heading fontFamily='heading' color='gray.200' fontSize='md' mb={2} alignSelf='flex-start' mt={12}>Alterar senha</Heading>
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
                    <Button title='Atualizar' mt={4} />
                </Center>
            </ScrollView>
        </VStack>
    )
};
