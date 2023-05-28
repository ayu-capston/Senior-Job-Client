import React, { useState, useEffect } from 'react';

import * as s from './StyledInput';

interface ParamProps {
    name: string;
    type?: string;
    width?: string;
    placeholder?: string;
    required?: boolean;
    max?: number;
    maxLength?: number;
    erase?: boolean;
}

export default function TextInput({ name, type, width, placeholder, required, maxLength, max, erase }: ParamProps) {
    const [isInputValue, setIsInputValue] = useState('');

    const onClickInitInputValue = () => {
        setIsInputValue('');
    };

    const onChangeInputValue = (e: any) => {
        setIsInputValue(e.target.value);
    };

    return (
        <>
            <s.TextInputSection>
                {erase ? <s.TextInputResetButton onClick={onClickInitInputValue}> 지우기 </s.TextInputResetButton> : ''}
                <s.TextInput
                    name={name}
                    type={type}
                    width={width}
                    required={required}
                    max={max}
                    maxLength={maxLength}
                    placeholder={placeholder ? placeholder : ''}
                    onChange={onChangeInputValue}
                />
                {maxLength ? (
                    <s.TextInputLength>
                        ( {isInputValue.length} / {maxLength} )
                    </s.TextInputLength>
                ) : (
                    ''
                )}
            </s.TextInputSection>
        </>
    );
}
