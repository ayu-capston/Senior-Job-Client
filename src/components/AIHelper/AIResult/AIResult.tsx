import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AILoading from '../AILoading/AILoading';
import ImageResumeSample from '@assets/images/image-resume-sample.png';
import ImageResumeGpt from '@assets/images/image-resume-gpt.png';
import * as S from './StyledAIResult';

const AIResult = () => {
    const [data, setData] = useState('test');
    const navigate = useNavigate();

    const handleNextStep = () => {
        navigate('/aihelper/interview');
    };

    return (
        <S.ResumeContainer>
            <S.InputContainer>{data ? <img src={ImageResumeGpt} alt='이력서 샘플' /> : <AILoading type='resume' />}</S.InputContainer>
            {data && (
                <S.BtnWrap>
                    <button onClick={() => navigate(-1)}>이전</button>
                    <button>다운로드 하기</button>
                    <button onClick={handleNextStep}>AI 면접 보러가기</button>
                </S.BtnWrap>
            )}
        </S.ResumeContainer>
    );
};

export default AIResult;
