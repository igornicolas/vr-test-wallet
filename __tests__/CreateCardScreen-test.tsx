import CreateCard from '@/src/screens/CreateCard';
import { act, fireEvent, render } from '@testing-library/react-native';
import React from 'react';

describe('<CreateCardScreen />', () => {
    it('check createCard form all components', () => {
        //@ts-ignore
        const wrapper = render(<CreateCard />);

        const submitButton = wrapper.getByTestId('submitButton');
        expect(submitButton).toBeTruthy();

        const inputNumber = wrapper.getByTestId('number');
        expect(inputNumber).toBeTruthy();

        void act(() => {
            fireEvent.changeText(inputNumber, '5555555555555555');
        });
        expect(inputNumber.props.value).toBe('5555 5555 5555 5555'); //masked

        const inputexpirationDate = wrapper.getByTestId('expirationDate');
        void act(() => {
            fireEvent.changeText(inputexpirationDate, '06/35');
        });
        expect(inputexpirationDate.props.value).toBe('06/35');

        const inputCVV = wrapper.getByTestId('cvv');
        void act(() => {
            fireEvent.changeText(inputCVV, '333');
        });
        expect(inputCVV.props.value).toBe('333');

        const inputName = wrapper.getByTestId('name');
        void act(() => {
            fireEvent.changeText(inputName, 'John Doe');
        });
        expect(inputName.props.value).toBe('John Doe');

        expect(submitButton).toBeEnabled(); //all inputs filled
    });
});
