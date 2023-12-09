import styled from 'styled-components';

export const ResumeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const InputContainer = styled.div`
    width: 876px;
    margin-bottom: 43px;
    padding: 33px;
    border-radius: 20px;
    border: 0.667px solid #ccc;
    & > div + div {
        margin-top: 30px;
    }
`;

export const PlusBtn = styled.button`
    display: block;
    margin: 27px auto 0;
    width: 104px;
    height: 33px;
    border-radius: 10px;
    border: 1px solid #ccc;
    background: #fff;
    color: #ccc;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
`;

export const BtnWrap = styled.div`
    margin-bottom: 132px;
    button:first-child {
        margin-right: 20px;
        background: #ccc;
    }
    button {
        width: 149px;
        padding: 13px 27px;
        border-radius: 33px;
        background: #124800;
        color: #fff;
        text-align: center;
        font-size: 1.7rem;
        font-weight: 500;
    }
`;

export const RadioBtnWrap = styled.div`
    display: flex;
    justify-content: right;
    margin-bottom: 16px;
    & :nth-child(2) {
        margin-right: 10px;
    }
    input[type='radio'] + label {
        display: inline-block;
        width: 104px;
        text-align: center;
        padding: 7px 0;
        border-radius: 10px;
        border: 1px solid #ccc;
        cursor: pointer;
        color: #ccc;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.8rem;
    }

    input[type='radio'] {
        display: none;
    }

    input[type='radio']:checked + label {
        color: #124800;
        border: 1px solid #124800;
    }
`;
