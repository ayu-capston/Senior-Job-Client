import PriceInfo from './PriceInfo';
import ScheduleInfo from './ScheduleInfo';
import TotalPeople from './TotalPeople';

const LectureMainInfo = (props) => {
    const { type, price, startdate, enddate, maxparticipants } = props;
    const mainInfo = {
        cost: <PriceInfo price={price} />,
        schedule: <ScheduleInfo startdate={startdate} enddate={enddate} />,
        total: <TotalPeople maxparticipant={maxparticipants} />
    };
    return <>{mainInfo[type]}</>;
};

export default LectureMainInfo;
