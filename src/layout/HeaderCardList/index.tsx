import { Typography } from '@/src/components/Typography';
import { COLORS } from '@/src/styles/colors';
import { AntDesign } from '@expo/vector-icons';
import { StackHeaderProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export default function HeaderCardList(props: StackHeaderProps) {
    const { navigation } = props;

    function handleGoMenu() {
        navigation.popToTop();
    }
    function handleAddNewCard() {
        navigation.navigate('CreateCard');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <BorderlessButton
                    style={styles.iconButton}
                    onPress={handleGoMenu}
                >
                    <AntDesign
                        name="arrowleft"
                        color={COLORS.blueLight}
                        size={21}
                    />
                </BorderlessButton>

                <Typography variant="h3" color={COLORS.blueDark}>
                    Wallet Test
                </Typography>

                <BorderlessButton
                    style={styles.iconButton}
                    onPress={handleAddNewCard}
                >
                    <AntDesign name="plus" size={22} color={COLORS.blueLight} />
                </BorderlessButton>
            </View>
            <View style={styles.titleContainer}>
                <Typography variant="h4" color={COLORS.blueLight}>
                    Meus cartões
                </Typography>
            </View>
        </SafeAreaView>
    );
}
