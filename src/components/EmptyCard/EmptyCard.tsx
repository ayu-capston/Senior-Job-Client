import * as S from './StyledEmptyCard';
import emptyImg from '@images/image-error-small.svg';

interface EmptyCardProps {
    type?: string;
    text1: string;
    text2: string;
}

const EmptyCard = ({ type, text1, text2 }: EmptyCardProps) => {
    return (
        <S.EmptyLectureCard type={type}>
            <img src={emptyImg} alt='노란색 손바닥 이미지' />
            <div>
                {text1} <br /> {text2}
            </div>
        </S.EmptyLectureCard>
    );
};

export default EmptyCard;
