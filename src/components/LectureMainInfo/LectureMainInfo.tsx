import PriceInfo from './PriceInfo';
import ScheduleInfo from './ScheduleInfo';
import TotalPeople from './TotalPeople';

interface LectureMainInfoProps {
    type: 'cost' | 'schedule' | 'total';
    price?: number;
    startdate?: string;
    enddate?: string;
    maxparticipants?: number;
}

const LectureMainInfo = ({ type, price, startdate, enddate, maxparticipants }: LectureMainInfoProps) => {
    const mainInfo = {
        cost: <PriceInfo price={price} />,
        schedule: <ScheduleInfo startdate={startdate} enddate={enddate} />,
        total: <TotalPeople maxparticipant={maxparticipants} />
    };
    return <>{mainInfo[type]}</>;
};

export default LectureMainInfo;
