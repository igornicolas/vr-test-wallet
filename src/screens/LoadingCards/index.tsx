import { StackNavigation } from '@/src/routes/stackRoutes';
import useCardsStore from '@/src/store';
import { useEffect } from 'react';
import { Alert } from 'react-native';
import Animated, {
    Easing,
    interpolateColor,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { WalletIcon } from '../../../assets/svgs/WalletIcon';
import { styles } from './styles';

interface LoadingCardsScreenProps {
    navigation: StackNavigation;
}

export const LoadingCards = ({ navigation }: LoadingCardsScreenProps) => {
    const handleNavigateToHome = () => navigation.navigate('Menu');
    const handleNavigateToCardsList = () => navigation.navigate('CardsList');

    const scaleAnimation = useSharedValue(1);

    const { getCards } = useCardsStore((state) => state);

    async function loadCards() {
        const cardsLoaded = await getCards();
        if (!cardsLoaded)
            return Alert.alert('Erro ', 'Erro ao carregar cartões', [
                {
                    text: 'Voltar',
                    onPress: handleNavigateToHome,
                },
            ]);

        return setTimeout(() => {
            handleNavigateToCardsList();
        }, 1000);
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: withTiming(scaleAnimation.value, {
                        duration: 100,
                        easing: Easing.linear,
                    }),
                },
            ],
        };
    });
    const animatedProps = useAnimatedProps(() => {
        return {
            stroke: interpolateColor(
                scaleAnimation.value,
                [1, 1.5],
                ['#12C2E9', '#A5FF32'],
            ),
        };
    });

    useEffect(() => {
        loadCards();
        setTimeout(() => {
            scaleAnimation.value = 1.5;
        }, 1000);
    }, []);

    return (
        <Animated.View style={styles.container}>
            <WalletIcon style={animatedStyle} animatedProps={animatedProps} />
        </Animated.View>
    );
};
