import AntDesign from '@expo/vector-icons';

jest.mock('@expo/vector-icons', () => ({
    loadFont: jest.fn(),
    Icon: 'Icon',
}));
jest.mock('@expo/vector-icons', () => ({
    AntDesign: '',
}));
