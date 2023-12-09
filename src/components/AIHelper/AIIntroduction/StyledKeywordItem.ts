import styled from 'styled-components';
import CheckIcon from '@assets/images/icon-green-check.svg';
import NoneCheckIcon from '@assets/images/icon-black-check.svg';

export const SelectWrap = styled.div`
    width: 130px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid #ccc;

    input[type='checkbox'] {
        display: none;
    }

    label {
        color: #ccc;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.4rem;
        cursor: pointer;
        &::before {
            content: '';
            display: inline-block;
            width: 20px;
            height: 20px;
            margin-right: 5px;
            background-image: url(${NoneCheckIcon});
            background-repeat: no-repeat;
            background-size: contain;
            vertical-align: middle;
        }
    }

    input[type='checkbox']:checked + label {
        color: #124800;

        &::before {
            background-image: url(${CheckIcon});
        }
    }
`;
