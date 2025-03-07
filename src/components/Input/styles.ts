import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        gap: 8,
        flex: 1,
        maxHeight: 70,
        width: '100%',
    },
    input: {
        flex: 1,
        height: '100%',
        color: COLORS.black,
        fontSize: 16,
        fontFamily: 'PTSans_400Regular',
        fontWeight: '400',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: COLORS.white,
        shadowColor: 'rgba(0, 0, 0, 0.15)',
        shadowOffset: { height: 0, width: 1 },
        shadowRadius: 4,

        height: 45,
        borderRadius: 6,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: COLORS.greyLight,
    },
    iconContainer: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: COLORS.blueLight,
        marginLeft: -6,

        alignItems: 'center',
        justifyContent: 'center',
    },
});
