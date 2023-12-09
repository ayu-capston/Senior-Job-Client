import styled from 'styled-components';
import deleteImg from '@assets/images/icon-delete-btn.svg';

export const InputWrap = styled.div`
    display: flex;
    gap: 21px;

    div:nth-child(1) {
        width: 268px;
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
        width: 223px;
        & div,
        section {
            width: 100%;
            input {
                height: 45px;
                padding: 0 15px;
            }
        }
    }

    div:nth-child(3) {
        width: 128px;
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
