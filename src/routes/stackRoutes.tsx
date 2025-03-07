import { NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Background } from '../layout/Background';
import HeaderCardList from '../layout/HeaderCardList';
import { StyledHeader } from '../layout/StyledHeader';
import { CardConfirmation } from '../screens/CardConfirmation';
import { CardsList } from '../screens/CardsList';
import CreateCard from '../screens/CreateCard';
import { LoadingCards } from '../screens/LoadingCards';
import Menu from '../screens/Menu';

export type ScreenNames = [
    'Menu',
    'CreateCard',
    'CardsList',
    'LoadingCards',
    'CardConfirmation',
];
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();
export function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{}}>
            <Stack.Group
                screenOptions={{
                    header: StyledHeader,
                }}
                screenLayout={({ children }) => (
                    <Background>{children}</Background>
                )}
            >
                <Stack.Screen
                    name="Menu"
                    component={Menu}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="CreateCard" component={CreateCard} />
                <Stack.Screen
                    name="CardConfirmation"
                    component={CardConfirmation}
                />
            </Stack.Group>
            <Stack.Screen
                name="CardsList"
                component={CardsList}
                options={{ header: HeaderCardList }}
            />
            <Stack.Screen
                name="LoadingCards"
                component={LoadingCards}
                layout={({ children }) => (
                    <Background animated>{children}</Background>
                )}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
