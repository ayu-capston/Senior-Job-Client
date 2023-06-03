import styled from 'styled-components';

interface InfoWrapProps {
    icon: string;
}

export const InfoWrap = styled.div<InfoWrapProps>`
    display: flex;
    justify-content: space-between;
    position: relative;
    font-weight: 700;
    font-size: 1.6rem;

    &::before {
        content: '';
        position: absolute;
        width: 33px;
        height: 33px;
        margin: -6px;
        background: ${(props) => `url(${props.icon}) no-repeat 33px 33px`};
        background-position: 50% 50%;
        background-size: cover;
    }

    & > span:first-child {
        padding-left: 30px;
        font-size: 2rem;
        color: #f9b501;
    }
`;

export const DateWrap = styled.div`
    & > p:nth-child(2) {
        color: #000000;
        text-align: right;
    }
`;
