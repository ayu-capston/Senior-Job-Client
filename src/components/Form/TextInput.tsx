import React, { useState, useEffect } from 'react';

import * as s from './StyledInput';

interface ParamProps {
    name: string;
    placeholder?: string;
    required?: boolean;
    maxLength?: number;
}

export default function TextInput({ name, placeholder, required, maxLength }: ParamProps) {
    const [isInputValue, setIsInputValue] = useState('');

    const onClickInitInputValue = () => {
        setIsInputValue('');
    };

    const onChangeInputValue = (e: any) => {
        setIsInputValue(e.target.value);
    };

    useEffect(() => {}, [isInputValue]);

    return (
        <>
            <s.TextInputSection>
                <s.TextInputResetButton onClick={onClickInitInputValue}> 지우기 </s.TextInputResetButton>
                <s.TextInput
                    type='text'
                    name={name}
                    required={required}
                    maxLength={maxLength}
                    value={isInputValue}
                    placeholder={placeholder ? placeholder : ''}
                    onChange={onChangeInputValue}
                />
                <s.TextInputLength>
                    ( {isInputValue.length} / {maxLength} )
                </s.TextInputLength>
            </s.TextInputSection>
        </>
    );
}
