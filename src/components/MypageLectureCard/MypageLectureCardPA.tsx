import * as S from './StyledMypageLectureCard';

interface LectureCardApplyProps {
    Lecturetype?: string;
}

const MypageLectureCardPA = ({ Lecturetype }: LectureCardApplyProps) => {
    return (
        <S.LectureCard>
            <S.CategoryBtnWrap>
                <S.LectureCategoryWrapPA>
                    <S.LectureCategory>디자인</S.LectureCategory>
                    {Lecturetype === 'Participate' && <S.LectureAutoDelete>수강 완료</S.LectureAutoDelete>}
                    {Lecturetype === 'Apply' && <S.LectureState>승인 대기중</S.LectureState>}
                </S.LectureCategoryWrapPA>
                <S.FixBtnWrap>
                    <S.LectureFixBtn>{Lecturetype === 'Participate' ? '삭제하기' : '신청 취소하기'}</S.LectureFixBtn>
                </S.FixBtnWrap>
            </S.CategoryBtnWrap>
            <S.LectureDetailWrap>
                <S.LectureInfoWrap>
                    <S.LectureTitle>목공예 전문가를 구합니다.</S.LectureTitle>
                    <S.LectureLocation>서울시 용산구</S.LectureLocation>
                    <S.LectureDate>2024년 01월 04일 ~ 2024년 03월 04일</S.LectureDate>
                    <S.LectureCost>38,000</S.LectureCost>
                </S.LectureInfoWrap>
            </S.LectureDetailWrap>
        </S.LectureCard>
    );
};

export default MypageLectureCardPA;
