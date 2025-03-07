import * as React from 'react';
import Animated, { AnimatedProps } from 'react-native-reanimated';
import Svg, { Path, SvgProps } from 'react-native-svg';

const SvgAnimated = Animated.createAnimatedComponent(Svg);
const PathAnimated = Animated.createAnimatedComponent(Path);

export function WalletIcon(props: AnimatedProps<SvgProps>) {
    return (
        <SvgAnimated
            width={52}
            height={52}
            viewBox="0 0 52 52"
            fill={'none'}
            stroke="#12C2E9"
            {...props}
        >
            <PathAnimated
                d="M45.444 51H6.556A5.555 5.555 0 011 45.444V6.556A5.556 5.556 0 016.556 1h38.888A5.556 5.556 0 0151 6.556v38.888A5.555 5.555 0 0145.444 51z"
                strokeWidth={1.5}
            />
            <PathAnimated
                d="M1 34.333h17.778c.92 0 1.68.773 2.083 1.6C21.433 37.108 22.79 38.5 26 38.5c3.211 0 4.567-1.389 5.139-2.567.403-.827 1.164-1.6 2.083-1.6H51M1 12.111h50M1 23.222h50"
                strokeWidth={1.5}
            />
        </SvgAnimated>
    );
}
