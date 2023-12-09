import SeoulTypoImg from '@assets/images/img-seoul-typo.png';
import * as S from './StyledLocalPortalCard';

const LocalPortalCard = () => {
    return (
        <S.PortalCardWrap>
            <img src={SeoulTypoImg} alt='지역 포털 이미지' />
            <S.PortalCardName>서울 일자리 포털</S.PortalCardName>
        </S.PortalCardWrap>
    );
};

export default LocalPortalCard;
