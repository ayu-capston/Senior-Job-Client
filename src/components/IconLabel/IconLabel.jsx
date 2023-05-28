import * as S from './StyledIconLabel';

const IconLabel = ({ label, iconimg }) => {
    return <S.Heading iconimg={iconimg}>{label}</S.Heading>;
};

export default IconLabel;
