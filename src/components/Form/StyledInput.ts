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
    font-size: 1.4rem;
    border-radius: 5px;
    border: 1.2px solid #c4c4c4;

    &::placeholder {
        color: #c4c4c4;
    }
`;

const TextInputResetButton = styled.button`
    font-weight: 500;
    font-size: 1rem;
    color: #124800;

    &:hover {
        font-weight: 700;
        color: #000;
    }
`;

const TextInputLength = styled.span`
    font-size: 1rem;
    color: #c4c4c4;
`;

export { TextInputSection, TextInputResetButton, TextInputLength, TextInput };
