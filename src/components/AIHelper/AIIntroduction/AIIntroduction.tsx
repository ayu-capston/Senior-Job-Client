import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AINav from '../AINav/AINav';
import * as S from './StyledAIIntroduction';
import KeywordIntroduction from './KeywordIntroduction';
import SelfIntroduction from './SelfIntroduction';

const AIIntroduction = () => {
    const [choiceType, setChoiceType] = useState('keyword');
    const navigate = useNavigate();

    const handleRadioChange = (event: any) => {
        setChoiceType(event.target.value);
    };

    const handleNextStep = () => {
        navigate('/aihelper/resume/additional');
    };

    return (
        <S.ResumeContainer>
            <div>
                <AINav text='자기소개서' />
                <S.RadioBtnWrap>
                    <input type='radio' name='choiceType' value='keyword' id='keyword' onChange={handleRadioChange} />
                    <label htmlFor='keyword'>키워드 선택</label>
                    <input type='radio' name='choiceType' value='self' id='self' onChange={handleRadioChange} />
                    <label htmlFor='self'>직접 입력</label>
                </S.RadioBtnWrap>
                <S.InputContainer>{choiceType === 'keyword' ? <KeywordIntroduction /> : <SelfIntroduction />}</S.InputContainer>
            </div>
            <S.BtnWrap>
                <button onClick={() => navigate(-1)}>이전</button>
                <button onClick={handleNextStep}>다음</button>
            </S.BtnWrap>
        </S.ResumeContainer>
    );
};

export default AIIntroduction;
