import Mypage from '../Mypage/Mypage';
import emptyImg from '@images/image-error-small.svg';
import * as S from './StyledParticipateLectureList';

function ParticipateLectureList() {
    return (
        <>
            <Mypage>
                <S.OpenLectureTitle>참여 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>인증 받은 경력 정보로 나만의 강좌를 개설해보세요!</S.BannerTitle>
                    <S.BannerBtn>강좌 개설하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
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
                            <S.LectureComplete>수강 완료</S.LectureComplete>
                        </S.LectureCategoryWrap>
                        <S.FixBtnWrap>
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

export default ParticipateLectureList;
