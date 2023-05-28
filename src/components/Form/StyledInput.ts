import styled from 'styled-components';

const TextInputSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
`;

const TextInput = styled.input`
    ${({ width }) => (width ? { width } : '100%')};
    height: 30px;
    padding: 25px 15px;
    font-size: 1.4rem;
    border-radius: 5px;
    border: 1.2px solid #c4c4c4;

    &::placeholder {
        color: #c4c4c4;
    }
`;

const TextArea = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 25px 15px;
    font-size: 1.4rem;
    border-radius: 5px;
    border: 1.2px solid #c4c4c4;

    &::placeholder {
        color: #c4c4c4;
    }
`;

const TextInputResetButton = styled.button`
    font-weight: 500;
    font-size: 1.2rem;
    color: #124800;

    &:hover {
        font-weight: 700;
        color: #000;
    }
`;

const TextInputLength = styled.span`
    font-size: 1.2rem;
    color: #c4c4c4;
`;

export { TextInputSection, TextInput, TextArea, TextInputResetButton, TextInputLength };
