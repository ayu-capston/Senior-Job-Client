import label from '../../assets/images/Icon-big-label.svg';
import * as S from './StyledCardMenu';

function CardMenu() {
    return (
        <S.CardBtn>
            <img src={label} alt='가격 라벨 이미지' />
            <span>제 2의 커리어 시작하기</span>
            <p>강좌 수강/개설</p>
        </S.CardBtn>
    );
}

export default CardMenu;
