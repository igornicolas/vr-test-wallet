import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderRadius: 16,
        paddingHorizontal: 20,
        paddingVertical: 28,
        backgroundColor: COLORS.black,
        elevation: 1,
        shadowOffset: { height: -2, width: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.5,
    },
    cardDetails: {
        marginTop: 34,
        marginBottom: 14,
        gap: 4,
    },
});
