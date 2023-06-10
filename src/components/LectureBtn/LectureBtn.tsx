import house from '@assets/images/icon-small-house.svg';
import * as S from './StyledLectureBtn';

function LectureBtn() {
    return (
        <S.LectureBtn>
            <img src={house} alt='집 모양 아이콘' />
            <span>홈/리빙</span>
        </S.LectureBtn>
    );
}

export default LectureBtn;
