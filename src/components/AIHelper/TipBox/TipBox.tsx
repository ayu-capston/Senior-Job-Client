import * as S from './StyledTipBox';

interface TipBoxProps {
    text: string;
    width: string;
}

const TipBox = ({ text, width }: TipBoxProps) => {
    return <S.TipWrap width={width}>{text}</S.TipWrap>;
};

export default TipBox;
