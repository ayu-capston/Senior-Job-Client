import styled from 'styled-components';

export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
`;

export const BtnWrap = styled.div`
    margin-bottom: 37px;
    button:first-child {
        margin-right: 20px;
        background: #ccc;
    }

    button:last-child {
        margin-left: 20px;
        background: #ffb30e;
    }

    button {
        min-width: 149px;
        padding: 13px 27px;
        border-radius: 33px;
        background: #124800;
        color: #fff;
        text-align: center;
        font-size: 1.6rem;
        font-weight: 500;
    }
`;

export const InputContainer = styled.div`
    width: 876px;
    margin-bottom: 43px;
    padding: 33px;
    border-radius: 20px;
    border: 0.667px solid #ccc;
    text-align: center;
    & > div + div {
        margin-top: 30px;
    }
`;
