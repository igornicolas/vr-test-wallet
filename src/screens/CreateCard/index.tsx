import { Input } from '@/src/components/Input';
import { Typography } from '@/src/components/Typography';
import { StackNavigation } from '@/src/routes/stackRoutes';
import useCardsStore from '@/src/store';
import { AntDesign } from '@expo/vector-icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert, View } from 'react-native';
import * as yup from 'yup';

import { Button } from '../../components/Button';
import { COLORS } from '../../styles/colors';
import { styles } from './styles';

const cardRegisterFormSchema = yup.object({
    number: yup.string().required().min(19),
    cvv: yup.string().required().min(3),
    name: yup.string().required().min(1),
    expirationDate: yup.string().required().min(5),
});

interface CardRegisterFormType
    extends yup.InferType<typeof cardRegisterFormSchema> {}

interface CreateCardProps {
    navigation: StackNavigation;
}

export default function CreateCard({ navigation }: CreateCardProps) {
    const {
        control,
        handleSubmit,
        formState: { isSubmitting, isValid },
    } = useForm<CardRegisterFormType>({
        resolver: yupResolver(cardRegisterFormSchema),
    });

    const { createCard } = useCardsStore((state) => state);

    const handleNavigateToCardConfirmation = () =>
        navigation.navigate('CardConfirmation');

    async function handleSubmitForm(data: CardRegisterFormType) {
        try {
            const newCard = {
                number: data.number,
                cvv: data.cvv,
                name: data.name,
                expirationDate: data.expirationDate,
            };
            const response = await createCard(newCard);
            if (!response)
                return Alert.alert(
                    'Não foi possível cadastrar o cartão, tente novamente!',
                );

            handleNavigateToCardConfirmation();
        } catch (error) {
            Alert.alert(
                'Não foi possível cadastrar o cartão, tente novamente!',
            );
        }
    }

    return (
        <View style={styles.container}>
            <Typography variant="h1" color={COLORS.white}>
                Wallet Test
            </Typography>

            <Input
                testID="number"
                control={control}
                name="number"
                label="número do cartão"
                placeholder="0000 0000 0000 0000"
                icon={<AntDesign name="camerao" color="white" size={16} />}
                keyboardType="numeric"
                mask={[
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                ]}
            />

            <Input
                control={control}
                name="name"
                testID="name"
                label="nome do titular do cartão"
                placeholder="digite o nome do titular do cartão"
                autoCapitalize="words"
            />

            <View style={styles.row}>
                <Input
                    control={control}
                    name="expirationDate"
                    testID="expirationDate"
                    label="vencimento"
                    placeholder="00/00"
                    keyboardType="numeric"
                    mask={[/\d/, /\d/, '/', /\d/, /\d/]}
                />
                <Input
                    control={control}
                    name="cvv"
                    testID="cvv"
                    label="código de segurança"
                    placeholder="***"
                    keyboardType="numeric"
                    mask={[/\d/, /\d/, /\d/]}
                />
            </View>

            <Button
                testID="submitButton"
                disabled={!isValid}
                text="avançar"
                onPress={handleSubmit(handleSubmitForm)}
                isLoading={isSubmitting}
            />
        </View>
    );
}
