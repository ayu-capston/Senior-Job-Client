import styled from 'styled-components';

export const ApplyBtn = styled.button`
    width: 437px;
    height: 79px;
    margin-top: 24px;
    /* background-color: #124800; */
    background-color: ${(props) => props.btncolor};

    border-radius: 9px;
    font-size: 2.7rem;
    font-weight: 700;
    /* color: #ffffff; */
    color: ${(props) => props.color};

    & > span {
        display: block;
        margin-bottom: 7px;
        font-size: 2rem;
        color: #cccccc;
    }

    &:disabled {
        cursor: default;
    }
`;
