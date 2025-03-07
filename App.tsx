import { PTSans_400Regular } from '@expo-google-fonts/pt-sans';
import { PTSansCaption_400Regular } from '@expo-google-fonts/pt-sans-caption';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';

import Routes from './src/routes';

export default function App() {
    const [fontsLoaded] = useFonts({
        PTSans_400Regular,
        PTSansCaption_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return <Routes />;
}
