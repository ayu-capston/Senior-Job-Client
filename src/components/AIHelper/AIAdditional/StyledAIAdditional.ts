import styled from 'styled-components';
import StampIcon from '@assets/images/icon-stamp.png';

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
        font-size: 1.6rem;
        font-weight: 500;
    }
`;

export const CategoryTitle = styled.p`
    margin-bottom: 10px;
    color: #000;
    font-size: 1.6rem;
`;

export const DropdownWrap = styled.div`
    & div {
        width: 160px;
        div {
            height: 45px;
            padding: 0 8px;
        }
        input {
            height: 45px;
            padding: 0 8px;
        }
    }
`;

export const TitleWrap = styled.div`
    & section {
        width: 763px;
        input {
            padding: 22px 14px;
        }
    }
`;

export const SignWrap = styled.div`
    border-top: 1px solid #ccc;
    padding: 20px 0 47px 0;
    text-align: center;
    font-size: 12px;
    line-height: 1.3rem;

    p:nth-child(1) {
        margin-bottom: 10px;
    }

    p:nth-child(2) {
        margin-bottom: 13px;
    }

    p:nth-child(3) {
        &::after {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-left: 3px;
            background-image: url(${StampIcon});
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: middle;
        }
    }
`;
