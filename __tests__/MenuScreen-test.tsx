import MenuScreen from '@/src/screens/Menu';
import { render } from '@testing-library/react-native';

describe('<MenuScreen />', () => {
    it('check if  text renders correctly on HomeScreen', () => {
        //@ts-ignore
        const { getByText } = render(<MenuScreen />);

        const title = getByText('Wallet Test');
        expect(title).toBeTruthy();
    });
    it('check if buttons renders correctly on HomeScreen', () => {
        //@ts-ignore
        const { getByText } = render(<MenuScreen />);

        const buttonGoToMyCards = getByText('meus cartões');
        const buttonGoToCreateCards = getByText('cadastrar cartão');

        expect(buttonGoToMyCards).toBeTruthy();
        expect(buttonGoToCreateCards).toBeTruthy();
    });
    it('check menuscreen renders correctly', () => {
        //@ts-ignore
        const { toJSON } = render(<MenuScreen />);
        const tree = toJSON();
        expect(tree).toMatchSnapshot();
    });
});
