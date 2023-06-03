import * as S from './StyledJoinButton';

interface JoinButtonProps {
    text1?: string;
    text2: string;
    btncolor: string;
    color: string;
    disabled?: boolean;
}

const JoinButton = ({ text1, text2, btncolor, color, disabled }: JoinButtonProps) => {
    return (
        <S.ApplyBtn disabled={disabled} btncolor={btncolor} color={color}>
            <span>{text1}</span>
            {text2}
        </S.ApplyBtn>
    );
};

export default JoinButton;
