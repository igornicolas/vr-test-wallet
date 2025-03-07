import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
    default: {
        color: COLORS.greyDark,
        fontWeight: '400',
        fontFamily: 'PTSansCaption_400Regular',
    },
    h1: {
        fontSize: 28,
        lineHeight: 32,
    },
    h2: {
        fontSize: 26,
        lineHeight: 28,
    },
    h3: {
        fontSize: 22,
        lineHeight: 24,
    },
    h4: {
        fontFamily: 'PTSans_400Regular',
        fontSize: 20,
        lineHeight: 22,
    },
    h5: {
        fontFamily: 'PTSans_400Regular',
        fontSize: 18,
        lineHeight: 20,
    },
    p: {
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'PTSans_400Regular',
    },
    sm: {
        fontSize: 14,
        lineHeight: 16,
        fontFamily: 'PTSans_400Regular',
    },
});
