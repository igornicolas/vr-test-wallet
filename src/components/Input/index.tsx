import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { MaskedInput, MaskedInputProps } from './MaskedInput';

interface InputProps extends MaskedInputProps {
    control: Control<any>;
    name: string;
}

export function Input({ control, name, ...rest }: InputProps) {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <MaskedInput
                    {...rest}
                    value={field.value}
                    onChangeText={field.onChange}
                />
            )}
        />
    );
}
