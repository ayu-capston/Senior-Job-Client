import PriceInfo from './PriceInfo';
import ScheduleInfo from './ScheduleInfo';
import TotalPeople from './TotalPeople';

const LectureMainInfo = (props) => {
    const { type, price, start_date, end_date, max_participants } = props;
    const mainInfo = {
        cost: <PriceInfo price={price} />,
        schedule: <ScheduleInfo startDate={start_date} endDate={end_date} />,
        total: <TotalPeople participant={max_participants} />
    };
    return <>{mainInfo[type]}</>;
};

export default LectureMainInfo;
