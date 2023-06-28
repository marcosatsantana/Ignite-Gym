import { HStack, Heading, Icon, Text, VStack, Image, Box } from 'native-base';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/Button';


export default function Exercise() {

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg='gray.600' pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon as={Feather} name='arrow-left' color='green.500' size={6} />
                </TouchableOpacity>
                <HStack justifyContent='space-between' mt={4} mb={8} alignItems='center'>
                    <Heading color='gray.100' fontSize='lg' flexShrink={1}>Remada unilateral</Heading>
                    <HStack alignItems='center'>
                        <BodySvg />
                        <Text color='gray.200' ml={1} textTransform='capitalize'>Costas</Text>
                    </HStack>
                </HStack>
            </VStack>
            <VStack px={8}>
                <Image
                    w='full'
                    h={80}
                    source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg' }}
                    alt='Nome do exercicio'
                    mb={3}
                    mt={4}
                    rounded='lg'
                    resizeMode='cover'
                />
                <Box bg='gray.600' rounded='md' pb={4} px={4}>
                    <HStack alignItems='center' justifyContent='space-around' mb={6} mt={5}>
                        <HStack>
                            <SeriesSvg />
                            <Text color='gray.200' ml={2}>3 séries</Text>
                        </HStack>
                        <HStack>
                            <RepetitionsSvg />
                            <Text color='gray.200' ml={2}>12 repetições</Text>
                        </HStack>
                    </HStack>
                    <Button title='Marcar como realizado'/>
                </Box>
            </VStack>
        </VStack>
    )
};
