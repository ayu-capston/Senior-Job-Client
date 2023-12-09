import * as S from './StyledKeywordItem';

interface ParamProps {
    text: string;
    id: string;
}

const KeywordItem = ({ text, id }: ParamProps) => {
    return (
        <S.SelectWrap>
            <input type='checkbox' id={id} name='SelectedKeyword' />
            <label htmlFor={id}>{text}</label>
        </S.SelectWrap>
    );
};

export default KeywordItem;
