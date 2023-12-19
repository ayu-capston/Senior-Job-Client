import styled from 'styled-components';
import CheckIcon from '@assets/images/icon-small-check.png';
import ResumeBgImg from '@assets/images/image-resume-desk.png';

const GoBtnStyles = `
    padding: 13px 27px;
    border-radius: 33px;
    background: #124800;
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
`;

export const AIContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const MenuTitle = styled.p`
    padding: 23px 0 30px 0;
    color: #333;
    font-size: 3rem;
    font-weight: 700;
`;

export const ResumeWrap = styled.div`
    width: 902px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 0 73px 0;
    border-radius: 20px;
    border: 1px solid #ccc;
    font-weight: 700;
    color: #000;
    background-image: url(${ResumeBgImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: rgba(255, 255, 255, 0.5);
    & > P:first-child {
        padding-bottom: 29px;
        font-size: 2.4rem;
        line-height: 2.9rem;
    }

    & > p:nth-child(2) {
        padding-bottom: 29px;
        font-size: 3.2rem;
        line-height: 3.8rem;
    }
`;

export const CheckText = styled.p`
    color: #000;
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.8rem;
    &::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 14px;
        background: url(${CheckIcon});
        background-size: contain;
        vertical-align: middle;
    }
    & + & {
        padding-top: 19px;
    }
`;

export const ResumeBtn = styled.button`
    margin-top: 37px;
    ${GoBtnStyles}
`;

export const ResumeSelectWrap = styled.div`
    display: flex;
    justify-content: space-between;
    /* gap: 10px; */
    width: 902px;
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
    ${GoBtnStyles}
`;
