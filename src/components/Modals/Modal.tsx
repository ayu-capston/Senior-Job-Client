import InnerModal from './InnerModal';
import MainModal from './MainModal';
import * as S from './StyledModal';

const Modal = () => {
    return (
        <S.ModalWrap>
            <MainModal />
            {/* <InnerModal /> */}
        </S.ModalWrap>
    );
};

export default Modal;
