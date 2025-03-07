import { useEffect } from 'react';
import { View, ViewStyle } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { COLORS } from '../../styles/colors';
import { Typography } from '../Typography';
import { styles } from './styles';

interface CardProps extends RectButtonProps {
    card: {
        number: string;
        name: string;
        expirationDate: string;
    };
    style?: ViewStyle;
    animated?: boolean;
}

export function Card({ card, style, animated = false, ...rest }: CardProps) {
    const springValue = useSharedValue(50);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            width: '100%',
            marginTop: withTiming(springValue.value, {
                duration: 1000,
                easing: Easing.elastic(6),
            }),
        };
    });
    const lastFourNumbers = card.number.replaceAll(' ', '').substring(12, 16);
    const lastNumber = card.number.replaceAll(' ', '').substring(15, 16);

    useEffect(() => {
        springValue.value = 0;
    }, []);
    const isBlackCard = parseInt(lastNumber) % 2 === 0;
    return (
        <Animated.View style={animated && animatedStyle}>
            <RectButton
                style={[
                    styles.container,
                    style,
                    !isBlackCard && { backgroundColor: COLORS.greenLight },
                ]}
                {...rest}
            >
                <Typography
                    variant="h5"
                    color={isBlackCard ? COLORS.white : COLORS.greyDark}
                >
                    {isBlackCard ? 'Black Card' : 'Green Card'}
                </Typography>

                <View style={styles.cardDetails}>
                    <Typography
                        color={isBlackCard ? COLORS.white : COLORS.greyDark}
                    >
                        {card.name}
                    </Typography>
                    <Typography
                        variant="sm"
                        color={isBlackCard ? COLORS.white : COLORS.greyDark}
                    >
                        {`**** **** **** ${lastFourNumbers}`}
                    </Typography>
                    <Typography
                        variant="sm"
                        color={isBlackCard ? COLORS.white : COLORS.greyDark}
                    >
                        {`Validade ${card.expirationDate}`}
                    </Typography>
                </View>
            </RectButton>
        </Animated.View>
    );
}
