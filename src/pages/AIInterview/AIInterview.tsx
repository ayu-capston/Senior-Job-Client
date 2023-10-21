import AILoading from '~/components/AILoading/AILoading';
import * as S from './StyledAIInterview';

const AIInterview = () => {
    return (
        <S.AIContainer>
            <div>
                <S.AITitle>AI 모의 면접</S.AITitle>
                <S.AIWrap>
                    <AILoading type='interview' />
                </S.AIWrap>
            </div>
        </S.AIContainer>
    );
};

export default AIInterview;
