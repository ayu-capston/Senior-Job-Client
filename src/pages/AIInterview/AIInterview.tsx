import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AILoading from '~/components/AIHelper/AILoading/AILoading';
import AIInterviewQuestion from '~/components/AIHelper/AIInterviewQuestion/AIInterviewQuestion';
import * as S from './StyledAIInterview';

const AIInterview = () => {
    const [data, setData] = useState('');
    const navigate = useNavigate();

    return (
        <S.AIContainer>
            <div>
                <S.AITitle>AI 모의 면접</S.AITitle>
                <S.AIWrap>
                    {data ? Array.from({ length: 5 }).map((_, index) => <AIInterviewQuestion key={index} />) : <AILoading type='interview' />}
                </S.AIWrap>
                {data && (
                    <S.BtnWrap>
                        <button
                            onClick={() => {
                                navigate(-1);
                            }}
                        >
                            이전
                        </button>
                        <button>저장하기</button>
                    </S.BtnWrap>
                )}
            </div>
        </S.AIContainer>
    );
};

export default AIInterview;
