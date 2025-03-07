import { COLORS } from '@/src/styles/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: 0,
        backgroundColor: COLORS.greyLight,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: COLORS.greyLight,
        zIndex: 1,
        boxShadow: `0 10px 15px -15px ${COLORS.blueDark}`,
    },
    titleContainer: {
        backgroundColor: COLORS.greyLight,
        paddingVertical: 20,
        overflow: 'hidden',
        alignItems: 'center',
    },
    iconButton: {
        padding: 8,
        borderRadius: 20,
    },
});
