import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',

        position: 'absolute',
        top: 0,
    },
    emptyView: {
        width: 30,
    },
    backButton: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
});
