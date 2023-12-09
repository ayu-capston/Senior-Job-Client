import keyword from '~/constants/keyword';
import KeywordItem from './KeywordItem';
import TipBox from '../TipBox/TipBox';
import * as S from './StyledKeywordIntroduction';

const KeywordIntroduction = () => {
    return (
        <>
            <TipBox width='552px' text='회원님을 잘 표현할 수 있는 단어들을 선택해주세요. 일벗 AI가 자동으로 자기소개서를 만들어드릴게요!' />
            <S.KeywordWrap>
                {keyword.map((data, index) => (
                    <KeywordItem text={data} key={index} id={'select' + index} />
                ))}
            </S.KeywordWrap>
            <S.PlusBtn>+</S.PlusBtn>
        </>
    );
};

export default KeywordIntroduction;
