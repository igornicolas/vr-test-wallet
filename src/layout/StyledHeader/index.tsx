import { Typography } from '@/src/components/Typography';
import { AntDesign } from '@expo/vector-icons';
import { StackHeaderProps } from '@react-navigation/stack';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '../../styles/colors';
import { styles } from './styles';

export function StyledHeader({ navigation, route }: StackHeaderProps) {
    return (
        <SafeAreaView style={styles.container}>
            <BorderlessButton
                onPress={navigation.goBack}
                style={styles.backButton}
            >
                <AntDesign
                    name="arrowleft"
                    size={22}
                    color={COLORS.blueLight}
                />
            </BorderlessButton>

            <Typography variant="h3" color={COLORS.blueLight}>
                cadastro
            </Typography>
            <View style={styles.emptyView} />
        </SafeAreaView>
    );
}
