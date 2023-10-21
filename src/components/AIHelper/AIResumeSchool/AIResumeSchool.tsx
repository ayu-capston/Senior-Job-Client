import { TextInput } from '@components/Form/TextInput';
import Dropdown from '@components/Form/Dropdown';
import schoolCategory from '~/constants/school';
import * as S from './StyledAIResumeSchool';

interface ParamProps {
    deleteType: string;
    id?: number;
    onDelete?: (value: any) => void;
}

const AIResumeSchool = ({ deleteType, id, onDelete }: ParamProps) => {
    const handleDelete = () => {
        onDelete && onDelete(id);
    };
    return (
        <S.InputWrap>
            <div>
                <S.CategoryTitle>종류</S.CategoryTitle>
                <Dropdown menuUnit='' menuItems={schoolCategory} onChange={(e: any) => {}}></Dropdown>
            </div>
            <div>
                <S.CategoryTitle>학교명</S.CategoryTitle>
                <TextInput type='text' name='school_name' placeholder='일벗 대학교' required={true} erase={false} width='100%' />
            </div>
            <div>
                <S.CategoryTitle>기간</S.CategoryTitle>
                <div>
                    <TextInput type='text' name='start_date' placeholder='2017' required={true} erase={false} width='100%' />
                    <TextInput type='text' name='end_date' placeholder='2021' required={true} erase={false} width='100%' />
                </div>
            </div>
            <div>
                <S.CategoryTitle>전공</S.CategoryTitle>
                <TextInput type='text' name='school_major' placeholder='소프트웨어학과' required={false} erase={false} width='100%' />
            </div>
            {deleteType === 'y' && <S.deleteBtn onClick={handleDelete}></S.deleteBtn>}
        </S.InputWrap>
    );
};

export default AIResumeSchool;
