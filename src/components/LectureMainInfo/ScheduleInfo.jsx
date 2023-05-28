import calendarIcon from '../../assets/images/icon-calendar.svg';
import * as S from './StyledLectureMainInfo';

const ScheduleInfo = () => {
    return (
        <S.InfoWrap icon={calendarIcon}>
            <span>진행일정</span>
            <span>50,000원</span>
        </S.InfoWrap>
    );
};

export default ScheduleInfo;
