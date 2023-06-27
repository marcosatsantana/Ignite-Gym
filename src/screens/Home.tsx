import { HomeHeader } from '@components/HomeHeader'
import {VStack, Text} from 'native-base'

export default function Home() {
    return(
        <VStack flex={1}>
            <HomeHeader />
        </VStack>
    )
};
