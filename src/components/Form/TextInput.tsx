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
    onChange: (value: any) => void;
}

function TextInput(props: ParamProps) {
    const [isInputValue, setIsInputValue] = useState('');

    const onClickInitInputValue = () => {
        setIsInputValue('');
        props.onChange('');
    };

    const onChangeInputValue = (e: any) => {
        setIsInputValue(e.target.value);
        props.onChange(e.target.value);
    };

    return (
        <>
            <s.TextInputSection>
                {props.erase ? <s.TextInputResetButton onClick={onClickInitInputValue}> 지우기 </s.TextInputResetButton> : ''}
                <s.TextInput
                    name={props.name}
                    type={props.type}
                    value={isInputValue}
                    width={props.width}
                    required={props.required}
                    max={props.max}
                    maxLength={props.maxLength}
                    placeholder={props.placeholder ? props.placeholder : ''}
                    onChange={onChangeInputValue}
                />
                {props.maxLength ? (
                    <s.TextInputLength>
                        ( {isInputValue.length} / {props.maxLength} )
                    </s.TextInputLength>
                ) : (
                    ''
                )}
            </s.TextInputSection>
        </>
    );
}

function TextArea(props: ParamProps) {
    const [isTextAreaValue, setIsTextAreaValue] = useState('');

    const onClickInitInputValue = () => {
        setIsTextAreaValue('');
        props.onChange('');
    };

    const onChangeInputValue = (e: any) => {
        setIsTextAreaValue(e.target.value);
        props.onChange(e.target.value);
    };

    return (
        <>
            <s.TextInputSection>
                {props.erase ? <s.TextInputResetButton onClick={onClickInitInputValue}> 지우기 </s.TextInputResetButton> : ''}
                <s.TextArea
                    name={props.name}
                    value={isTextAreaValue}
                    required={props.required}
                    maxLength={props.maxLength}
                    placeholder={props.placeholder ? props.placeholder : ''}
                    onChange={onChangeInputValue}
                />
                {props.maxLength ? (
                    <s.TextInputLength>
                        ( {isTextAreaValue.length} / {props.maxLength} )
                    </s.TextInputLength>
                ) : (
                    ''
                )}
            </s.TextInputSection>
        </>
    );
}

export { TextInput, TextArea };
