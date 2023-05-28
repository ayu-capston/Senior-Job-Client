import priceIcon from '../../assets/images/icon-price.svg';
import * as S from './StyledLectureMainInfo';

const PriceInfo = () => {
    return (
        <S.InfoWrap icon={priceIcon}>
            <span>가격</span>
            <span>50,000원</span>
        </S.InfoWrap>
    );
};

export default PriceInfo;
