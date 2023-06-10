import styled from 'styled-components';
import wave from '@assets/images/wave.svg';

export const MinPageWrap = styled.section`
    background-color: #ddf0d7;
`;

export const CardWrap = styled.section`
    display: flex;
    justify-content: center;
    gap: 30px;
    padding: 109px 0 109px 0;
`;

export const MoreInfoWrap = styled.section`
    display: flex;
    justify-content: center;
    gap: 13px;
    background: url(${wave}) center / cover no-repeat;

    & > img {
        margin-bottom: 30px;
    }
`;

export const ContentsWrap = styled.div`
    margin-top: 60px;
    & > P {
        min-width: 520px;
        margin-bottom: 27px;
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 110%;
        color: #5e6f68;
        & > span {
            margin-left: 65px;
            font-size: 4.5rem;
            background: linear-gradient(87deg, #f17228 6%, #fdc347 42%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
    & > div > a:first-child {
        margin: 0 13px 0 136px;
    }
`;

export const LectureBtnWrap = styled.section`
    padding: 80px 0 76px 0;
    & > p {
        margin-bottom: 90px;
        font-size: 3.2rem;
        font-weight: 700;
        text-align: center;
        & > span {
            background: linear-gradient(87deg, #f17228 6%, #fdc347 42%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

    & > div {
        display: flex;
        justify-content: center;
        gap: 29px;
    }
`;
