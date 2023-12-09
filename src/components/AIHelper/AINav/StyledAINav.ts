import styled from 'styled-components';

export const NavWrap = styled.div`
    margin: 60px 0 30px;
    color: #333;
    font-size: 3rem;
    font-weight: 700;
    span:first-child {
        position: relative;
        padding-right: 39px;
        &::before {
            content: '>';
            position: absolute;
            top: 5px;
            left: 159px;
        }
    }
`;
