import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AINav from '../AINav/AINav';
import TipBox from '../TipBox/TipBox';
import AIResumeCareer from '../AIResumeCareer/AIResumeCareer';
import * as S from './StyledAICareer';

const AICareer = () => {
    const [careerItem, setCareerItem] = useState<JSX.Element[]>([]);
    const [nextId, setNextId] = useState(0);
    const navigate = useNavigate();

    const handleAddCareer = () => {
        const id = nextId;
        setNextId((prevId) => prevId + 1);
        setCareerItem((prevItem) => [...prevItem, <AIResumeCareer key={id} deleteType='y' id={id} onDelete={handleDeleteItem} />]);
    };

    const handleDeleteItem = (id: number) => {
        setCareerItem((prevItem) => prevItem.filter((item) => item.props.id !== id));
    };

    const handleNextStep = () => {
        navigate('/aihelper/resume/introduction');
    };

    return (
        <S.ResumeContainer>
            <div>
                <AINav text='경력정보' />
                <S.InputContainer>
                    <TipBox width='217px' text='회원님의 업무 경험을 알려주세요!' />
                    <AIResumeCareer deleteType='n' />
                    {careerItem.map((data, index) => (
                        <div key={index}>{data}</div>
                    ))}
                    <S.PlusBtn onClick={handleAddCareer}>+</S.PlusBtn>
                </S.InputContainer>
            </div>
            <S.BtnWrap>
                <button onClick={() => navigate(-1)}>이전</button>
                <button onClick={handleNextStep}>다음</button>
            </S.BtnWrap>
        </S.ResumeContainer>
    );
};

export default AICareer;
