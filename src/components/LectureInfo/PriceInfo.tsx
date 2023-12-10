import IconLabel from '../IconLabel/IconLabel';
import priceIcon from '../../assets/images/icon-price.svg';
import * as S from './StyledLectureInfo';
import priceParser from '~/utils/parser/priceParser';

interface PriceInfoProps {
    price?: number;
}

const PriceInfo = ({ price }: PriceInfoProps) => {
    return (
        <S.Infowrap>
            <IconLabel label='희망 가격' iconimg={priceIcon} />
            <S.Line />
            <p>{priceParser(price)}원</p>
        </S.Infowrap>
    );
};

export default PriceInfo;
