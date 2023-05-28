import RegionInfo from './RegionInfo';
import ContentInfo from './ContentInfo';
import PaymentInfo from './PaymentInfo';
import QuestionsInfo from './QuestionsInfo';

const LectureInfo = (props) => {
    const { type, region, content, bank_name, account_number } = props;
    const subInfo = {
        region: <RegionInfo region={region} />,
        lectureContent: <ContentInfo content={content} />,
        payment: <PaymentInfo bankName={bank_name} account_number={account_number} />,
        question: <QuestionsInfo />
    };
    return <>{subInfo[type]}</>;
};

export default LectureInfo;
