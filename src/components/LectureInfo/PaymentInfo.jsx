import IconLabel from '../IconLabel/IconLabel';
import paymentIcon from '../../assets/images/icon-card.svg';
import * as S from './StyledLectureInfo';

const PaymentInfo = ({ bankname, accountnumber, accountname }) => {
    return (
        <S.Infowrap>
            <IconLabel label='결제 수단' iconimg={paymentIcon} />
            <S.Line />
            <p>{`${bankname} ${accountnumber} (예금주 : ${accountname})`}</p>
        </S.Infowrap>
    );
};

export default PaymentInfo;
