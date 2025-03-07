import { Text } from 'react-native';

import { styles } from './styles';

interface TypographyProps {
    children: string;
    color?: string;
    variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'sm';
}

export function Typography({
    children,
    variant = 'p',
    color,
}: TypographyProps) {
    return (
        <Text style={[styles.default, styles[variant], { color }]}>
            {children}
        </Text>
    );
}
