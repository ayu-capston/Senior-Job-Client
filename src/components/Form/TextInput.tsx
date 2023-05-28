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

function TextInput({ name, type, width, placeholder, required, maxLength, max, erase }: ParamProps) {
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
                    value={isInputValue}
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

function TextArea({ name, placeholder, required, maxLength, erase }: ParamProps) {
    const [isTextAreaValue, setIsTextAreaValue] = useState('');

    const onClickInitInputValue = () => {
        setIsTextAreaValue('');
    };

    const onChangeInputValue = (e: any) => {
        setIsTextAreaValue(e.target.value);
    };

    return (
        <>
            <s.TextInputSection>
                {erase ? <s.TextInputResetButton onClick={onClickInitInputValue}> 지우기 </s.TextInputResetButton> : ''}
                <s.TextArea
                    name={name}
                    value={isTextAreaValue}
                    required={required}
                    maxLength={maxLength}
                    placeholder={placeholder ? placeholder : ''}
                    onChange={onChangeInputValue}
                />
                {maxLength ? (
                    <s.TextInputLength>
                        ( {isTextAreaValue.length} / {maxLength} )
                    </s.TextInputLength>
                ) : (
                    ''
                )}
            </s.TextInputSection>
        </>
    );
}

export { TextInput, TextArea };
