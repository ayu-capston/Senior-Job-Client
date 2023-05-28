import styled from 'styled-components';

const FormBox = styled.section`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 90%;
    height: 2500px;
    padding: 35px 50px 35px 35px;
    border-radius: 20px;
    border: 0.7px solid #ccc;
`;

const InputLabel = styled.span`
    margin: auto 0px;
    height: auto;
`;

export { FormBox, InputLabel };
