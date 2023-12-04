import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AINav from '../AINav/AINav';
import AIResumeCertificate from '../AIResumeCertificate/AIResumeCertificate';
import * as S from './StyledAICertificate';
import TipBox from '../TipBox/TipBox';

const AICertificate = () => {
    const [certificateItem, setCertificateItem] = useState<JSX.Element[]>([]);
    const [nextId, setNextId] = useState(0);
    const navigate = useNavigate();

    const handleAddCertificate = () => {
        const id = nextId;
        setNextId((prevId) => prevId + 1);
        setCertificateItem((prevItem) => [...prevItem, <AIResumeCertificate key={id} deleteType='y' id={id} onDelete={handleDeleteItem} />]);
    };

    const handleDeleteItem = (id: number) => {
        setCertificateItem((prevItem) => prevItem.filter((item) => item.props.id !== id));
    };

    const handleNextStep = () => {
        // setIsNext(true)
        navigate('/aihelper/resume/career');
    };
    return (
        <S.ResumeContainer>
            <div>
                <AINav text='자격정보' />
                <S.InputContainer>
                    <TipBox width='336px' text='회원님의 이력에 도움이 될만한 증빙 자료를 입력해주세요!' />
                    <AIResumeCertificate deleteType='n' />
                    {certificateItem.map((data, index) => (
                        <div key={index}>{data}</div>
                    ))}
                    <S.PlusBtn onClick={handleAddCertificate}>+</S.PlusBtn>
                </S.InputContainer>
            </div>
            <S.BtnWrap>
                <button onClick={() => navigate(-1)}>이전</button>
                <button onClick={handleNextStep}>다음</button>
            </S.BtnWrap>
        </S.ResumeContainer>
    );
};

export default AICertificate;
