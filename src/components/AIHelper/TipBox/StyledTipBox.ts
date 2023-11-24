import styled from 'styled-components';
import BulbIcon from '@assets/images/icon-bulb.svg';

export const TipWrap = styled.div`
    display: flex;
    align-items: center;
    width: 336px;
    padding: 5px 10px;
    border-radius: 10px;
    background-color: #ecf0f3;
    color: #333;
    font-size: 1.2rem;
    font-weight: 500;
    line-height: 14px;

    &::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
        background-image: url(${BulbIcon});
        background-repeat: no-repeat;
        background-size: contain;
        vertical-align: middle;
    }
`;
