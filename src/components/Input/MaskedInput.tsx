import { ReactNode } from 'react';
import { View } from 'react-native';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';

import { COLORS } from '../../styles/colors';
import { Typography } from '../Typography';
import { styles } from './styles';

export interface MaskedInputProps extends MaskInputProps {
    label?: string;
    labelColor?: string;
    icon?: ReactNode;
}

export function MaskedInput({
    label,
    labelColor,
    icon,
    ...rest
}: MaskedInputProps) {
    return (
        <View style={styles.container}>
            {label ? (
                <Typography
                    variant="sm"
                    color={labelColor ? labelColor : COLORS.grey}
                >
                    {label}
                </Typography>
            ) : null}

            <View style={styles.inputContainer}>
                {!!icon ? (
                    <View style={styles.iconContainer}>{icon}</View>
                ) : null}

                <MaskInput
                    style={styles.input}
                    placeholderTextColor={COLORS.grey}
                    {...rest}
                />
            </View>
        </View>
    );
}
