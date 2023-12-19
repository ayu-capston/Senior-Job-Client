import NotFoundImg from '@assets/images/Image-Not-Found.svg';
import * as S from './StyledLocalPortalCard';
import { Link } from 'react-router-dom';

const LocalPortalCard = (props: LocalJobState) => {
    return (
        <Link to={props.url}>
            <S.PortalCardWrap>
                <img src={props.img ? props.img : NotFoundImg} alt='지역 포털 이미지' />
                <S.PortalCardName>{props.title}</S.PortalCardName>
            </S.PortalCardWrap>
        </Link>
    );
};

export default LocalPortalCard;
