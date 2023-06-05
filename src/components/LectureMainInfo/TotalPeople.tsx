import personIcon from '../../assets/images/icon-person.svg';
import * as S from './StyledLectureMainInfo';

interface TotalPeopleProps {
    maxparticipant?: number;
}

const TotalPeople = ({ maxparticipant }: TotalPeopleProps) => {
    return (
        <S.InfoWrap icon={personIcon}>
            <span>인원</span>
            <span>{maxparticipant}명 (현재 5명이 지원했어요!)</span>
        </S.InfoWrap>
    );
};

export default TotalPeople;
