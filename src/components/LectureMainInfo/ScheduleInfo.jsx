import calendarIcon from '../../assets/images/icon-calendar.svg';
import * as S from './StyledLectureMainInfo';

const ScheduleInfo = ({ startdate, enddate }) => {
    const [sYear, sMonth, sDay] = startdate.substring(0, 10).split('-');
    const [eYear, eMonth, eDay] = enddate.substring(0, 10).split('-');

    return (
        <S.InfoWrap icon={calendarIcon}>
            <span>진행일정</span>
            <span>
                {`${sYear}년 ${sMonth}월 ${sDay}일`} ~ {`${eYear}년 ${eMonth}월 ${eDay}일`}
            </span>
        </S.InfoWrap>
    );
};

export default ScheduleInfo;
