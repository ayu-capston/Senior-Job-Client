import { TextInput } from '@components/Form/TextInput';
import * as S from './StyledAIResumeCertificate';

interface ParamProps {
    deleteType: string;
    id?: number;
    onDelete?: (value: any) => void;
}

const AIResumeCertificate = ({ deleteType, id, onDelete }: ParamProps) => {
    const handleDelete = () => {
        onDelete && onDelete(id);
    };

    return (
        <S.InputWrap>
            <div>
                <S.CategoryTitle>자격증명</S.CategoryTitle>
                <TextInput type='text' name='school_name' placeholder='일벗 자격증' required={true} erase={false} width='100%' />
            </div>
            <div>
                <S.CategoryTitle>발급기관</S.CategoryTitle>
                <TextInput type='text' name='school_name' placeholder='일벗 기술 회의소' required={true} erase={false} width='100%' />
            </div>
            <div>
                <S.CategoryTitle>발행일</S.CategoryTitle>
                <TextInput type='text' name='school_name' placeholder='2023.10.07' required={true} erase={false} width='100%' />
            </div>
            {deleteType === 'y' && <S.deleteBtn onClick={handleDelete}></S.deleteBtn>}
        </S.InputWrap>
    );
};

export default AIResumeCertificate;
