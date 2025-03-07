import { Typography } from '@/src/components/Typography';
import { StackNavigation } from '@/src/routes/stackRoutes';
import useCardsStore from '@/src/store';
import { View } from 'react-native';

import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { COLORS } from '../../styles/colors';
import { styles } from './styles';

interface CardConfirmationProps {
    navigation: StackNavigation;
}

export function CardConfirmation({ navigation }: CardConfirmationProps) {
    const { createdCard, cleanCreatedCard } = useCardsStore((state) => state);

    function handleNavigateToLoadingCards() {
        cleanCreatedCard();
        navigation.navigate('LoadingCards');
    }

    if (!createdCard) return null;
    return (
        <View style={styles.container}>
            <View style={styles.headers}>
                <Typography variant="h1" color={COLORS.white}>
                    Wallet Test
                </Typography>
                <Typography variant="h4" color={COLORS.white}>
                    cartão cadastrado com sucesso
                </Typography>
            </View>
            <View style={styles.cardContainer}>
                <Card
                    card={{
                        number: createdCard.number,
                        expirationDate: createdCard.expirationDate,
                        name: createdCard.name,
                    }}
                />
            </View>
            <Button text="avançar" onPress={handleNavigateToLoadingCards} />
        </View>
    );
}
