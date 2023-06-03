import { useState } from 'react';
import closeIcon from '../../assets/images/icon-close-btn.svg';
import * as S from './StyledModal';
import { TextArea } from '../Form/TextInput';

const MainModal = () => {
    const [reason, setReason] = useState('');

    console.log(reason);
    return (
        <S.ModalContentWrap>
            <button type='button'>
                <img src={closeIcon} alt='창 닫기 아이콘' />
            </button>
            <h1 className='hidden'>강좌 신청 모달</h1>
            <S.ReasonContent>강좌 신청 이유를 입력해주세요! (선택)</S.ReasonContent>
            <form>
                <TextArea
                    name='reason_content'
                    placeholder='강좌를 꼭 듣고 싶은 이유를 적어주세요.'
                    maxLength={200}
                    width='560px'
                    onChange={(e: any) => {
                        setReason(e);
                    }}
                />
                <S.ApplyBtn>참여 신청하기</S.ApplyBtn>
            </form>
        </S.ModalContentWrap>
    );
};

export default MainModal;
