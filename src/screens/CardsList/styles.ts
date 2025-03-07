import { StyleSheet } from 'react-native';

import { COLORS } from '../../styles/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.blueDark,
    },
    content: {
        flex: 1,
        justifyContent: 'space-around',
        paddingHorizontal: 30,
    },
    highlightedCard: {
        gap: 100,
    },
    cardsListContainer: {
        alignItems: 'center',
        marginBottom: 50,
        paddingTop: 40,
        gap: 16,
    },
    cardsListContainerBlur: {
        position: 'absolute',
        opacity: 0.5,
        paddingHorizontal: 30,
        top: '75%',
        right: 0,
        left: 0,
    },
    cardListScrollView: {
        width: '100%',
    },
});
