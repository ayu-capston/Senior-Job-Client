import RegionInfo from './RegionInfo';
import ContentInfo from './ContentInfo';
import PaymentInfo from './PaymentInfo';
import QuestionsInfo from './QuestionsInfo';

function LectureInfo(props) {
    const { type, region, content, bank_name, account_number } = props;
    const subInfo = {
        region: <RegionInfo region={region} label='강좌 지역' />,
        lectureContent: <ContentInfo content={content} label='강좌 내용' />,
        payment: <PaymentInfo bankName={bank_name} account_number={account_number} label='결제 수단' />,
        question: <QuestionsInfo label='문의 사항' />
    };
    return <>{subInfo[type]}</>;
}

export default LectureInfo;
