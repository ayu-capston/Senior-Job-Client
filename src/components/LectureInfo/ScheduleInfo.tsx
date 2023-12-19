import IconLabel from '../IconLabel/IconLabel';
import calendarIcon from '../../assets/images/icon-calendar.svg';
import * as S from './StyledLectureInfo';

interface ScheduleInfoProps {
    startdate?: string;
    enddate?: string;
    cycle?: String;
    count?: number;
}

const ScheduleInfo = ({ startdate, enddate, cycle, count }: ScheduleInfoProps) => {
    const defaultDate = '2023-00-00T00:00:00';
    const [sYear, sMonth, sDay] = (startdate || defaultDate).substring(0, 10).split('-');
    const [eYear, eMonth, eDay] = (enddate || defaultDate).substring(0, 10).split('-');

    return (
        <S.Infowrap>
            <IconLabel label='진행일정' iconimg={calendarIcon} />
            <S.Line />
            <p>
                {`${sYear}년 ${sMonth}월 ${sDay}일`} ~ {`${eYear}년 ${eMonth}월 ${eDay}일`} {`(${cycle} ${count}회)`}
            </p>
        </S.Infowrap>
    );
};

export default ScheduleInfo;
