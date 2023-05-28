import IconLabel from '../IconLabel/IconLabel';
import paymentIcon from '../../assets/images/icon-card.svg';
import * as S from './StyledLectureInfo';

const PaymentInfo = () => {
    return (
        <S.Infowrap>
            <IconLabel label='결제 수단' iconimg={paymentIcon} />
            <S.Line />
            <p>신한 은행 xxx-xxx-xxxxxxx</p>
        </S.Infowrap>
    );
};

export default PaymentInfo;
