import personIcon from '../../assets/images/icon-person.svg';
import * as S from './StyledLectureMainInfo';

const TotalPeople = () => {
    return (
        <S.InfoWrap icon={personIcon}>
            <span>인원</span>
            <span>50,000원</span>
        </S.InfoWrap>
    );
};

export default TotalPeople;
