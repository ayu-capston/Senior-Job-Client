import calendarIcon from '../../assets/images/icon-calendar.svg';
import * as S from './StyledLectureMainInfo';

interface ScheduleInfoProps {
    startdate?: String;
    enddate?: String;
}

const ScheduleInfo = ({ startdate, enddate }: ScheduleInfoProps) => {
    const defaultDate = '2023-00-00T00:00:00';

    const [sYear, sMonth, sDay] = (startdate || defaultDate).substring(0, 10).split('-');
    const [eYear, eMonth, eDay] = (enddate || defaultDate).substring(0, 10).split('-');

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
