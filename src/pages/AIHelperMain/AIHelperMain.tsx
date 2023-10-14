import EmptyCard from '~/components/EmptyCard/EmptyCard';
import * as S from './StyledAIHelperMain';
import ResumeSelectCard from '~/components/ResumeSelectCard/ResumeSelectCard';

const AIHelperMain = () => {
    return (
        <S.AIContainer>
            <div>
                <S.MenuTitle>AI 이력서 작성</S.MenuTitle>
                <S.ResumeWrap>
                    <p>이력서 작성이 어려우신가요?</p>
                    <p>일벗과 함께 더욱 편리하게 이력서를 작성해보세요!</p>
                    <S.CheckText>정보를 간단하게 입력만 하면 이력서를 만들어줘요!</S.CheckText>
                    <S.CheckText>자신을 나타내는 키워드를 선택하면 키워드를 바탕으로 자기소개서를 만들어줘요!</S.CheckText>
                    <S.CheckText>자기소개서에서 면접 예상 질문을 추출해줘요!</S.CheckText>
                    <S.ResumeBtn>이력서 작성하러 가기</S.ResumeBtn>
                </S.ResumeWrap>
            </div>
            <div>
                <S.MenuTitle>AI 모의 면접</S.MenuTitle>
                <S.ResumeSelectWrap>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <ResumeSelectCard key={index} id={'select' + index} />
                    ))}
                </S.ResumeSelectWrap>
                <S.BtnWrap>
                    <S.GoInterview>모의 면접 진행하기</S.GoInterview>
                </S.BtnWrap>
                {/* <EmptyCard type={'ai'} text1={'면접을 진행할 이력서가 없습니다.'} text2={'새로 강좌를 개설해주세요!'} /> */}
            </div>
        </S.AIContainer>
    );
};

export default AIHelperMain;
