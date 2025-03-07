import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { ActivityIndicator } from 'react-native';

import { COLORS } from '../../styles/colors';
import { Typography } from '../Typography';
import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
    text: string;
    bgColor?: string;
    disabled?: boolean;
    onPress?: () => void;
    textColor?: string;
    isLoading?: boolean;
}

export function Button({
    disabled,
    text,
    bgColor,
    textColor,
    isLoading,
    ...rest
}: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                disabled && styles.disabled,
                !!bgColor && { backgroundColor: bgColor },
            ]}
            activeOpacity={disabled ? 1 : 0.8}
            {...rest}
        >
            {isLoading ? (
                <ActivityIndicator size="small" color={COLORS.white} />
            ) : (
                <Typography
                    variant="h5"
                    color={
                        disabled
                            ? styles.disabled.color
                            : !!textColor
                              ? textColor
                              : COLORS.white
                    }
                >
                    {text}
                </Typography>
            )}
        </TouchableOpacity>
    );
}
