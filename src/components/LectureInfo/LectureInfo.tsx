import RegionInfo from './RegionInfo';
import ContentInfo from './ContentInfo';
import PaymentInfo from './PaymentInfo';
import QuestionsInfo from './QuestionsInfo';
import PriceInfo from './PriceInfo';
import ScheduleInfo from './ScheduleInfo';

interface LectureInfoProps {
    type: 'region' | 'lectureContent' | 'payment' | 'question' | 'price' | 'schedule';
    lecturetype?: string;
    region?: string;
    content?: string;
    bankname?: string;
    accountnumber?: string;
    accountname?: string;
    price?: number;
    startdate?: string;
    enddate?: string;
    cycle?: String;
    count?: number;
}

const LectureInfo = ({
    type,
    region,
    content,
    bankname,
    accountnumber,
    accountname,
    lecturetype,
    price,
    startdate,
    enddate,
    cycle,
    count
}: LectureInfoProps) => {
    const subInfo = {
        region: <RegionInfo region={region} lecturetype={lecturetype} />,
        lectureContent: <ContentInfo content={content} lecturetype={lecturetype} />,
        payment: <PaymentInfo bankname={bankname} accountnumber={accountnumber} accountname={accountname} />,
        question: <QuestionsInfo />,
        price: <PriceInfo price={price} />,
        schedule: <ScheduleInfo startdate={startdate} enddate={enddate} cycle={cycle} count={count} />
    };
    return <>{subInfo[type]}</>;
};

export default LectureInfo;
