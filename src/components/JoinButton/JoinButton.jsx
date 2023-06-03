import * as S from './StyledJoinButton';

const JoinButton = ({ text1, text2, btncolor, color, disabled }) => {
    return (
        <S.ApplyBtn disabled={disabled} btncolor={btncolor} color={color}>
            <span>{text1}</span>
            {text2}
        </S.ApplyBtn>
    );
};

export default JoinButton;
