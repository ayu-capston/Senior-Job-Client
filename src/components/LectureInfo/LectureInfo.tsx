import RegionInfo from './RegionInfo';
import ContentInfo from './ContentInfo';
import PaymentInfo from './PaymentInfo';
import QuestionsInfo from './QuestionsInfo';

interface LectureInfoProps {
    type: 'region' | 'lectureContent' | 'payment' | 'question';
    region?: string;
    content?: string;
    bankname?: string;
    accountnumber?: string;
    accountname?: string;
}

const LectureInfo = ({ type, region, content, bankname, accountnumber, accountname }: LectureInfoProps) => {
    const subInfo = {
        region: <RegionInfo region={region} />,
        lectureContent: <ContentInfo content={content} />,
        payment: <PaymentInfo bankname={bankname} accountnumber={accountnumber} accountname={accountname} />,
        question: <QuestionsInfo />
    };
    return <>{subInfo[type]}</>;
};

export default LectureInfo;
