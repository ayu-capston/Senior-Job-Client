import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AILoading from '~/components/AIHelper/AILoading/AILoading';
import AIInterviewQuestion from '~/components/AIHelper/AIInterviewQuestion/AIInterviewQuestion';
import { interviewsample } from '~/constants/jobportalsample';
import * as S from './StyledAIInterview';

const AIInterview = () => {
    const [data, setData] = useState('TT');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({
            top: 0
        });
    }, []);

    return (
        <S.AIContainer>
            <div>
                <S.AITitle>AI 모의 면접</S.AITitle>
                <S.AIWrap>{data ? interviewsample.map((item) => <AIInterviewQuestion text={item} />) : <AILoading type='interview' />}</S.AIWrap>
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
