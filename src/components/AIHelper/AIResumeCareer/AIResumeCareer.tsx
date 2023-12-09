import { TextInput } from '@components/Form/TextInput';
import * as S from './StyledAIResumeCareer';

interface ParamProps {
    deleteType: string;
    id?: number;
    onDelete?: (value: any) => void;
}

const AIResumeCareer = ({ deleteType, id, onDelete }: ParamProps) => {
    const handleDelete = () => {
        onDelete && onDelete(id);
    };
    return (
        <S.InputWrap>
            <div>
                <S.CategoryTitle>근무기관</S.CategoryTitle>
                <TextInput type='text' name='school_name' placeholder='일벗 컴퍼니' required={true} erase={false} width='100%' />
            </div>
            <div>
                <S.CategoryTitle>근무기간</S.CategoryTitle>
                <div>
                    <TextInput type='text' name='start_date' placeholder='2017' required={true} erase={false} width='100%' />
                    <TextInput type='text' name='end_date' placeholder='2021' required={true} erase={false} width='100%' />
                </div>
            </div>
            <div>
                <S.CategoryTitle>담당업무</S.CategoryTitle>
                <TextInput type='text' name='school_name' placeholder='문서 관리 및 회계 업무' required={true} erase={false} width='100%' />
            </div>
            {deleteType === 'y' && <S.deleteBtn onClick={handleDelete}></S.deleteBtn>}
        </S.InputWrap>
    );
};

export default AIResumeCareer;
