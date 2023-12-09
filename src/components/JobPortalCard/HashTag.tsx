import * as S from './StyledHashTag';

interface ParamProps {
    tagname: string;
}

const HashTag = ({ tagname }: ParamProps) => {
    return <S.HashTagTitle>{tagname}</S.HashTagTitle>;
};

export default HashTag;
