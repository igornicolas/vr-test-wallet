import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.blueDark,
    },
    backgroundSquare: {
        position: 'absolute',
        opacity: 0.2,
        backgroundColor: COLORS.greyLight,
        width: 350,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        height: 236,
    },
    backgroundSquareTop: {
        transform: [
            { translateX: -50 },
            { translateY: -100 },
            { rotate: '-34deg' },
        ],
        left: 0,
        top: 0,
    },
    backgroundSquareBottom: {
        transform: [
            { translateX: 80 },
            { translateY: 80 },
            { rotate: '-214deg' },
        ],
        bottom: 0,
        right: 0,
    },
});
