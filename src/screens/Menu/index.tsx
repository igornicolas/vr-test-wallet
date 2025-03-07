import { Button } from '@/src/components/Button';
import { Typography } from '@/src/components/Typography';
import { StackNavigation } from '@/src/routes/stackRoutes';
import { COLORS } from '@/src/styles/colors';
import { View } from 'react-native';

import { styles } from './styles';

interface MenuScreenProps {
    navigation: StackNavigation;
}
export default function Menu({ navigation }: MenuScreenProps) {
    const handleNavigateCardsList = () => navigation.navigate('LoadingCards');
    const handleNavigateCreateCard = () => navigation.navigate('CreateCard');

    return (
        <View style={styles.container}>
            <Typography variant="h1" color={COLORS.white}>
                Wallet Test
            </Typography>

            <Button
                text={'meus cartões'}
                onPress={handleNavigateCardsList}
            ></Button>

            <Button
                text="cadastrar cartão"
                bgColor={COLORS.greenLight}
                textColor={COLORS.blueDark}
                onPress={handleNavigateCreateCard}
            />
        </View>
    );
}
