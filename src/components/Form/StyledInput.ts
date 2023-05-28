import styled from 'styled-components';

const TextInputSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`;

const TextInput = styled.input`
    width: ${({ width }) => (width ? { width } : '100%')};
    height: 30px;
    padding: 25px;
    font-family: SpoqaHanSansNeoRegular;
    font-size: 14px;
    border-radius: 5px;
    border: 1.2px solid #c4c4c4;

    &::placeholder {
        color: #c4c4c4;
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
    color: #c4c4c4;
`;

export { TextInputSection, TextInputResetButton, TextInputLength, TextInput };
