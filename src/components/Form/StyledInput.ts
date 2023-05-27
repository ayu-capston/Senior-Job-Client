import styled from 'styled-components';

const TextInputSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`;

const TextInput = styled.input`
    width: 100%;
    height: 30px;
    padding-left: 10px;
    font-family: SpoqaHanSansNeoRegular;
    font-size: 14px;
    border-radius: 5px;
    border: 0.7px solid #dae0e6;

    &::placeholder {
        color: #ccc;
    }
`;

const TextInputResetButton = styled.button`
    font-family: SpoqaHanSansNeoMedium;
    font-size: 10px;
    color: #124800;

    &:hover {
        font-family: SpoqaHanSansNeoBold;
        color: #000;
    }
`;

const TextInputLength = styled.span`
    font-family: SpoqaHanSansNeoRegular;
    font-size: 10px;
    color: #ccc;
`;

export { TextInputSection, TextInputResetButton, TextInputLength, TextInput };
