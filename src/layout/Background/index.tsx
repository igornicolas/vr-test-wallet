import { ReactNode, useEffect } from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';

import { styles } from './styles';

interface BackgroundProps {
    children: ReactNode;
    animated?: boolean;
}

export function Background({ children, animated = false }: BackgroundProps) {
    const animationTopViewValue = useSharedValue(-200);
    const animationTopViewStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { rotate: '-34deg' },
                { translateX: -120 },
                {
                    translateY: withTiming(animationTopViewValue.value, {
                        duration: 800,
                        easing: Easing.bounce,
                    }),
                },
            ],
            width: 450,
            height: 303,
        };
    });

    const animationBottomViewValue = useSharedValue(-200);
    const animationBottomViewStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: 120 },
                { rotate: '-214deg' },
                {
                    translateY: withTiming(animationBottomViewValue.value, {
                        duration: 800,
                        easing: Easing.bounce,
                    }),
                },
            ],
            width: 450,
            height: 303,
        };
    });

    useEffect(() => {
        setTimeout(() => {
            animationTopViewValue.value = -100;
            animationBottomViewValue.value = -30;
        }, 100);
    }, []);

    return (
        <Animated.View style={styles.container}>
            <Animated.View
                style={[
                    styles.backgroundSquare,
                    styles.backgroundSquareTop,
                    animated && animationTopViewStyle,
                ]}
            />

            {children}

            <Animated.View
                style={[
                    styles.backgroundSquare,
                    styles.backgroundSquareBottom,
                    animated && animationBottomViewStyle,
                ]}
            />
        </Animated.View>
    );
}
