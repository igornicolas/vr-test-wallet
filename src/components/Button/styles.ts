import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: COLORS.blueLight,
        height: 55,
        paddingHorizontal: 20,
        alignItems: 'center',
        borderRadius: 12,
    },

    disabled: {
        color: COLORS.grey,
        backgroundColor: COLORS.greyLight,
    },
});
