import { useNavigate } from 'react-router-dom';
import Mypage from '../Mypage/Mypage';
import emptyImg from '@images/image-error-small.svg';
import * as S from './StyledProposeLectureList';

function ProposeLectureList() {
    const navigate = useNavigate();
    const handleMoveApproval = () => {
        navigate(`/mypage/lecture/open/detail`);
    };
    return (
        <>
            <Mypage>
                <S.OpenLectureTitle>제안 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>배우고 싶은 강좌가 없나요? 새롭게 제안해보세요!</S.BannerTitle>
                    <S.BannerBtn>강좌 개설하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
                    <div>
                        <S.LectureFilterBtn>모집중</S.LectureFilterBtn>
                        <S.LectureFilterBtn>개설 대기중</S.LectureFilterBtn>
                        <S.LectureFilterBtn>진행중</S.LectureFilterBtn>
                        <S.LectureFilterBtn>완료</S.LectureFilterBtn>
                    </div>
                    <S.SortBtnWrap>
                        <S.LectureSortBtn>최신순</S.LectureSortBtn>
                        <S.SepLine></S.SepLine>
                        <S.LectureSortBtn>오래된 순</S.LectureSortBtn>
                    </S.SortBtnWrap>
                </S.LectureBtnWrap>
                <S.LectureCard>
                    <S.CategoryBtnWrap>
                        <S.LectureCategoryWrap>
                            <S.LectureCategory>요리</S.LectureCategory>
                            <S.LectureAutoDelete>14일 후에 자동으로 삭제됩니다!</S.LectureAutoDelete>
                        </S.LectureCategoryWrap>
                        <S.FixBtnWrap>
                            <S.LectureFixBtn>수정하기</S.LectureFixBtn>
                            <S.LectureFixBtn>삭제하기</S.LectureFixBtn>
                        </S.FixBtnWrap>
                    </S.CategoryBtnWrap>
                    <S.LectureDetailWrap>
                        <S.LectureInfoWrap>
                            <S.LectureTitle>30년 경력 한식 장인의 퓨전 한식 요리 교실</S.LectureTitle>
                            <S.LectureLocation>부산시 사하구</S.LectureLocation>
                            <S.LectureDate>2023년 6월 1일 ~ 2023년 6월 25일</S.LectureDate>
                            <S.LectureCost>39,800</S.LectureCost>
                        </S.LectureInfoWrap>
                        <S.ParticipantsBtnWrap>
                            <S.LectureDeadline>
                                자동 모집 마감까지
                                <span>7일</span>
                                남았어요!
                            </S.LectureDeadline>
                            <S.ParticipantsListBtn onClick={handleMoveApproval}>
                                <p>신청자 (5/20)</p>
                                <p>모집 마감하기</p>
                            </S.ParticipantsListBtn>
                        </S.ParticipantsBtnWrap>
                    </S.LectureDetailWrap>
                </S.LectureCard>
                {/* <S.EmptyLectureCard>
            <img src={emptyImg} alt='노란색 손바닥 이미지'></img>
            <div>
                현재 진행중인 강좌가 없습니다. <br /> 새로 강좌를 개설해주세요!
            </div>
        </S.EmptyLectureCard> */}
            </Mypage>
        </>
    );
}

export default ProposeLectureList;
