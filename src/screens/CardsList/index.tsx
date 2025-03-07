import { Button } from '@/src/components/Button';
import { Card } from '@/src/components/Card';
import { Typography } from '@/src/components/Typography';
import useCardsStore, { ICard } from '@/src/store';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import { COLORS } from '../../styles/colors';
import { styles } from './styles';

export function CardsList() {
    const { cards } = useCardsStore((state) => state);
    const [listOfCards, setListOfCards] = useState(cards);
    const [highlightedCard, setHighlightedCard] = useState<ICard | null>(null);

    function handleSelectCard(id: string) {
        if (highlightedCard?.id) {
            setHighlightedCard(null);
            setListOfCards([...listOfCards, highlightedCard]);
        } else {
            const cardsWithoutSelected = cards.filter((card) => card.id !== id);
            const highlightedCardFromList = cards.find(
                (card) => card.id === id,
            );

            if (highlightedCardFromList)
                setHighlightedCard(highlightedCardFromList);
            setListOfCards(cardsWithoutSelected);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {highlightedCard?.id ? (
                    <View style={styles.highlightedCard}>
                        <Card
                            animated
                            card={{
                                number: highlightedCard.number,
                                expirationDate: highlightedCard.expirationDate,
                                name: highlightedCard.name,
                            }}
                        />

                        <Button text="pagar com este cartão" />
                    </View>
                ) : null}

                <View
                    style={[
                        styles.cardsListContainer,
                        highlightedCard?.id
                            ? styles.cardsListContainerBlur
                            : {},
                    ]}
                >
                    <ScrollView
                        style={styles.cardListScrollView}
                        contentContainerStyle={{ paddingVertical: 60 }}
                        showsVerticalScrollIndicator={false}
                    >
                        {listOfCards.map((card, index) => (
                            <Card
                                key={card.id}
                                animated
                                card={{
                                    number: card.number,
                                    expirationDate: card.expirationDate,
                                    name: card.name,
                                }}
                                style={index > 0 ? { marginTop: -120 } : {}}
                                onPress={() => handleSelectCard(card.id)}
                            />
                        ))}
                    </ScrollView>

                    <Typography color={COLORS.white} variant="p">
                        usar este cartão
                    </Typography>
                </View>
            </View>
        </View>
    );
}
