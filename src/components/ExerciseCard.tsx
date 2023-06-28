import { Entypo } from '@expo/vector-icons'
import { HStack, Heading, Image, Text, VStack, Icon } from "native-base";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {

}

export function ExerciseCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack bg='gray.500' alignItems='center' p={2} pr={4} rounded='md' mb={3}>
                <Image
                    source={{ uri: 'https://www.feitodeiridium.com.br/wp-content/uploads/2016/07/remada-unilateral-2.jpg' }}
                    alt="Imagem do exercício"
                    width={16}
                    height={16}
                    rounded='md'
                    mr={4}
                    resizeMode="center"
                />
                <VStack flex={1}>
                    <Heading fontSize='lg' color='white'>
                        Remada unilateral
                    </Heading>
                    <Text fontSize='sm' color='gray.200' mt={1} numberOfLines={2}>
                        3 series x 12 repetições
                    </Text>
                </VStack>
                <Icon as={Entypo} name='chevron-thin-right' color='gray.300' />
            </HStack>
        </TouchableOpacity>
    )
};
