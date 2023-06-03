import closeIcon from '../../assets/images/icon-close-btn.svg';
import * as S from './StyledModal';

const InnerModal = () => {
    return (
        <S.ModalContentWrap>
            <button type='button'>
                <img src={closeIcon} alt='창 닫기 아이콘' />
            </button>
            <h1 className='hidden'>강좌 신청 완료 모달</h1>
            <S.SuccessContent>
                참여 신청이 정상적으로 이루어졌습니다.
                <br /> 개설자의 승인을 기다려주세요!
            </S.SuccessContent>
            <S.MoveList>내가 신청한 강좌 목록 보러가기</S.MoveList>
        </S.ModalContentWrap>
    );
};

export default InnerModal;
