import { TextArea } from '@components/Form/TextInput';
import * as S from './StyledAIInterviewQuestion';

interface ParamProps {
    text: string;
}

const AIInterviewQuestion = ({ text }: ParamProps) => {
    return (
        <S.AIQuestionWrap>
            <S.AIquestion>{text}</S.AIquestion>
            <TextArea name='ai_answer' placeholder='답변을 적어보세요!' required={true} maxLength={500} erase={true} width='100%' />
        </S.AIQuestionWrap>
    );
};

export default AIInterviewQuestion;
