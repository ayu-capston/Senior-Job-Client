import styled from 'styled-components';
import deleteImg from '@assets/images/icon-delete-btn.svg';

export const InputWrap = styled.div`
    display: flex;
    gap: 21px;

    div:nth-child(1) {
        width: 217px;
        & div,
        section {
            width: 100%;
            input {
                height: 45px;
                padding: 0 15px;
            }
        }
    }

    div:nth-child(2) {
        width: 196px;
        & > div {
            display: flex;
            width: 100%;
            gap: 28px;
            position: relative;
            & section {
                width: 84px;
                input {
                    height: 45px;
                    padding: 0 15px;
                }
            }
            & section:first-child::before {
                content: '~';
                position: absolute;
                top: 20px;
                left: 95px;
            }
        }
    }

    div:nth-child(3) {
        width: 316px;
        & div,
        section {
            width: 100%;
            input {
                height: 45px;
                padding: 0 15px;
            }
        }
    }
`;

export const CategoryTitle = styled.p`
    margin-bottom: 10px;
    color: #000;
    font-size: 1.6rem;
`;

export const deleteBtn = styled.button`
    width: 15px;
    height: 15px;
    margin-top: 40px;
    background-image: url(${deleteImg});
`;
