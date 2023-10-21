import { TextArea } from '@components/Form/TextInput';
import * as S from './StyledAIInterviewQuestion';

const AIInterviewQuestion = () => {
    return (
        <S.AIQuestionWrap>
            <S.AIquestion>1. 한식당 알바를 하면서 어떤 어려움이 있었고, 어떻게 해결하였나요?</S.AIquestion>
            <TextArea name='ai_answer' placeholder='답변을 적어보세요!' required={true} maxLength={500} erase={true} width='100%' />
        </S.AIQuestionWrap>
    );
};

export default AIInterviewQuestion;
