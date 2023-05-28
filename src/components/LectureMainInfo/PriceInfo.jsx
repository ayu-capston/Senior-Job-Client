import priceIcon from '../../assets/images/icon-price.svg';
import * as S from './StyledLectureMainInfo';

const PriceInfo = ({ price }) => {
    const priceformat = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (
        <S.InfoWrap icon={priceIcon}>
            <span>가격</span>
            <span>{priceformat}원</span>
        </S.InfoWrap>
    );
};

export default PriceInfo;
