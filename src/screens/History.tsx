import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, VStack, SectionList, Text } from 'native-base';
import { useState } from 'react';

export default function History() {
    const [exercises, SetExercises] = useState([
        {
            title: '26.08.2023',
            data: ['Puxada frontal', 'Remada unilateral'],
        },
        {
            title: '21.10.2023',
            data: ['Puxada frontal'],
        }
    ]);
    return (
        <VStack flex={1}>
            <ScreenHeader title='Histórico de Exercícios' />
            <SectionList
                px={8}
                sections={exercises}
                keyExtractor={item => item}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <HistoryCard />
                )}
                renderSectionHeader={({ section }) => (
                    <Heading fontFamily='heading' color='gray.200' fontSize='md' mt={10} mb={3}>{section.title}</Heading>
                )}
                contentContainerStyle={exercises.length === 0 && { flex: 1, justifyContent: 'center' }}
                ListEmptyComponent={() => (
                    <Text color='gray.100' textAlign='center'>
                        Não há exercícios registrados ainda. {'\n'} Vamos fazer exercício hoje ?
                    </Text>
                )}
            />
        </VStack>
    )
};
