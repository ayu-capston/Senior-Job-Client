import personIcon from '../../assets/images/icon-person.svg';
import * as S from './StyledLectureMainInfo';

const TotalPeople = ({ maxparticipant }) => {
    return (
        <S.InfoWrap icon={personIcon}>
            <span>인원</span>
            <span>{maxparticipant}명</span>
        </S.InfoWrap>
    );
};

export default TotalPeople;
