import styled from 'styled-components';

interface EmptyProps {
    type?: string;
}

export const EmptyLectureCard = styled.div<EmptyProps>`
    width: ${(props) => (props.type === 'ai' ? '902px' : 'auto')};
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 453px;
    border-radius: 20px;
    border: 1px solid #ccc;
    & > div {
        color: #b6b6b6;
        text-align: center;
        font-size: 1.9rem;
        font-weight: 700;
        line-height: 3rem;
    }
`;
