import styled from 'styled-components';
import HashTagIcon from '@assets/images/icon-small-hashtag.png';

export const HashTagTitle = styled.div`
    color: #333;
    font-size: 1.7rem;
    font-weight: 700;
    line-height: 2rem;
    flex-shrink: 0;
    &::before {
        content: '';
        display: inline-block;
        width: 24px;
        height: 24px;
        margin-right: 7px;
        background: url(${HashTagIcon});
        background-size: contain;
        vertical-align: middle;
    }
`;
