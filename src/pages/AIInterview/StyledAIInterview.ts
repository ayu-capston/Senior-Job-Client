import styled from 'styled-components';

export const AIContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const AITitle = styled.h1`
    margin: 32px 0 30px 0;
    color: #333;
    font-size: 3rem;
    font-weight: 700;
`;

export const AIWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 876px;
    margin-bottom: 55px;
    padding: 33px;
    border-radius: 20px;
    border: 0.667px solid #ccc;
    div + div {
        margin-top: 20px;
    }
`;

export const AIQuestionWrap = styled.div`
    width: 100%;
    padding: 19px 13px;
    border-radius: 20px;
    /* border: 1px solid #e5e5e5; */
    & section {
        width: 100%;
    }
`;

export const AIquestion = styled.div`
    margin-bottom: 12px;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 500;
    line-height: 2.2rem;
    color: #b6b6b6;
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 31px;
    button {
        width: 150px;
        padding: 13px 0;
        border-radius: 33.333px;
        background: #ccc;
        color: #fff;
        text-align: center;
        font-size: 1.7rem;
        font-weight: 500;
        line-height: 2rem;
        &:last-child {
            background: #124800;
        }
    }
`;
