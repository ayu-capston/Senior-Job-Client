import loadingImg from '@assets/images/loading.gif';
import * as S from './StyledAILoading';

interface AILoadingProps {
    type: string;
}

const AILoading = ({ type }: AILoadingProps) => {
    return (
        <>
            <S.AIDesc>일벗 AI가 열심히 {type === 'resume' ? '이력서를' : '면접질문을'} 만들고 있어요!</S.AIDesc>
            <S.LoadingImg src={loadingImg} alt='로딩 이미지' />
        </>
    );
};

export default AILoading;
