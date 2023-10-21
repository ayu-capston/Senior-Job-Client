import * as S from './StyledAINav';

interface AINavProps {
    text: string;
}

const AINav = ({ text }: AINavProps) => {
    return (
        <S.NavWrap>
            <span>이력서 작성</span>
            <span>{text}</span>
        </S.NavWrap>
    );
};

export default AINav;
