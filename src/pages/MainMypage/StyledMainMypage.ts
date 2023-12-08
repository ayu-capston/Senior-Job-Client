import styled from 'styled-components';
import FixIcon from '@images/icon-small-fix.svg';

export const MyProfileTitle = styled.p`
    margin-bottom: 28px;
    padding-left: 28px;
    color: #000;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.2rem;
`;

export const SubTitle = styled.p`
    margin: 0 0 8px 26px;
    padding: 3px 0 3px 6px;
    border-left: 2px solid #ccc;
    color: #333;
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 1.6rem;
`;

export const BasicInformWrap = styled.div`
    display: flex;
    gap: 25px;
    margin: 0 0 35px 18px;
    padding: 20px 33px 15px 20px;
    border-radius: 17px;
    border: 1px solid #ccc;
    img {
        width: 100px;
    }
`;

export const BasicInform = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    button {
        align-self: flex-end;
        margin-bottom: 10px;
        color: #333;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.6rem;
        &::before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url(${FixIcon});
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: bottom;
        }
    }

    div {
        padding: 10px;
        border-radius: 4px;
        background: #e6e6e6;
        color: #333;
        font-size: 1.2rem;
        font-weight: 400;
        line-height: 1.5rem;
    }

    div:nth-child(2) {
        margin-bottom: 5px;
    }
`;

export const ResumeSelectWrap = styled.div`
    display: flex;
    gap: 11px;
    margin-left: 18px;
    padding: 10px;
    border-radius: 20px;
    border: 0.667px solid #ccc;
    input[type='radio'] {
        display: none;
    }

    input[type='radio'] + label {
        display: inline-block;
        padding: 10px 21px 19px 21px;
        border-radius: 11px;
        border: 1px solid #ccc;
        cursor: pointer;
        p:nth-child(2) {
            width: 238px;
            padding: 20px 0 10px 0;
            font-size: 2.1rem;
            font-weight: 500;
            line-height: 2.6rem;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            color: #124800;
        }

        p:nth-child(3) {
            color: #b6b6b6;
            font-size: 1.5rem;
            font-weight: 500;
            line-height: 1.8rem;
        }
    }

    input[type='radio']:checked + label {
        background: #124800;

        p:nth-child(2) {
            color: #fff;
        }

        p:nth-child(3) {
            color: #fff;
        }
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: center;
    padding: 34px 0 71px 0;
`;

export const GoInterview = styled.button`
    padding: 13px 27px;
    border-radius: 33px;
    background: #124800;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
`;
