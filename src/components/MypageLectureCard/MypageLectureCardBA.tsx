import * as S from './StyledMypageLectureCard';

interface LectureCardApplyProps {
    Lecturetype?: string;
}

const MypageLectureCardBA = ({ Lecturetype }: LectureCardApplyProps) => {
    return (
        <S.LectureCard>
            <S.CategoryBtnWrap>
                <S.LectureCategoryWrap>
                    <S.LectureCategory>건강</S.LectureCategory>
                    {Lecturetype === 'Participate' && <S.LectureAutoDelete>수강 완료</S.LectureAutoDelete>}
                    {Lecturetype === 'Apply' && <S.LectureState>승인 대기중</S.LectureState>}
                </S.LectureCategoryWrap>
                <S.FixBtnWrap>
                    <S.LectureFixBtn>{Lecturetype === 'Participate' ? '삭제하기' : '신청 취소하기'}</S.LectureFixBtn>
                </S.FixBtnWrap>
            </S.CategoryBtnWrap>
            <S.LectureDetailWrap>
                <S.LectureInfoWrap>
                    <S.LectureTitle>몸이 유연해지는 스포츠 댄스</S.LectureTitle>
                    <S.LectureLocation>서울시 종로구</S.LectureLocation>
                    <S.LectureDate>2024년 01월 18일 ~ 2024년 03월 18일</S.LectureDate>
                    <S.LectureCost>49,000</S.LectureCost>
                </S.LectureInfoWrap>
            </S.LectureDetailWrap>
        </S.LectureCard>
    );
};

export default MypageLectureCardBA;
