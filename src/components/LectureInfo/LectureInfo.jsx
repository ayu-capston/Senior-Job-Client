import RegionInfo from './RegionInfo';
import ContentInfo from './ContentInfo';
import PaymentInfo from './PaymentInfo';
import QuestionsInfo from './QuestionsInfo';

const LectureInfo = (props) => {
    const { type, region, content, bankname, accountnumber, accountname } = props;
    const subInfo = {
        region: <RegionInfo region={region} />,
        lectureContent: <ContentInfo content={content} />,
        payment: <PaymentInfo bankname={bankname} accountnumber={accountnumber} accountname={accountname} />,
        question: <QuestionsInfo />
    };
    return <>{subInfo[type]}</>;
};

export default LectureInfo;
