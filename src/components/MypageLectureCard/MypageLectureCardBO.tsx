import { useNavigate } from 'react-router-dom';
import * as S from './StyledMypageLectureCard';

interface MypageLectureCardProps {
    Lecturetype?: string;
}

const MypageLectureCardBO = ({ Lecturetype }: MypageLectureCardProps) => {
    const navigate = useNavigate();
    const handleMoveApproval = () => {
        if (Lecturetype === 'ProposeLecture') {
            navigate(`/mypage/lecture/propose/approval/1`);
        } else if (Lecturetype === 'OpenLecture') {
            navigate(`/mypage/lecture/open/approval/1`);
        }
    };

    return (
        <>
            <S.LectureCard>
                <S.CategoryBtnWrap>
                    <S.LectureCategoryWrapBO>
                        <S.LectureCategory>홈/리빙</S.LectureCategory>
                        {Lecturetype === 'ProposeLecture' && <S.LectureAutoDelete>14일 후에 자동으로 삭제됩니다!</S.LectureAutoDelete>}
                        {Lecturetype === 'OpenLecture' && <S.LectureCategory>모집중</S.LectureCategory>}
                    </S.LectureCategoryWrapBO>
                    <S.FixBtnWrap>
                        <S.LectureFixBtn>수정하기</S.LectureFixBtn>
                        <S.LectureFixBtn>삭제하기</S.LectureFixBtn>
                    </S.FixBtnWrap>
                </S.CategoryBtnWrap>
                <S.LectureDetailWrap>
                    <S.LectureInfoWrap>
                        <S.LectureTitle>도배 경력자의 도배 기초</S.LectureTitle>
                        <S.LectureLocation>대구시 북구</S.LectureLocation>
                        <S.LectureDate>2024년 02월 01일 ~ 2024년 06월 01일</S.LectureDate>
                        <S.LectureCost>95,000</S.LectureCost>
                    </S.LectureInfoWrap>
                    <S.ParticipantsBtnWrap>
                        <S.LectureDeadline>
                            자동 모집 마감까지
                            <span>7일</span>
                            남았어요!
                        </S.LectureDeadline>
                        <S.ParticipantsListBtn onClick={handleMoveApproval}>
                            <p>신청자 (4/5)</p>
                            <p>모집 마감하기</p>
                        </S.ParticipantsListBtn>
                    </S.ParticipantsBtnWrap>
                </S.LectureDetailWrap>
            </S.LectureCard>
        </>
    );
};

export default MypageLectureCardBO;
