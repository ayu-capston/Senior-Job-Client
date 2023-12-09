import Mypage from '../Mypage/Mypage';
import * as S from './StyledApplyLectureList';
import MypageLectureCardS from '~/components/MypageLectureCard/MypageLectureCardS';
import EmptyCard from '~/components/EmptyCard/EmptyCard';

function ApplyLectureList() {
    return (
        <>
            <Mypage>
                <S.OpenLectureTitle>신청 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>배우고 싶은 강좌가 없나요? 새롭게 제안해보세요!</S.BannerTitle>
                    <S.BannerBtn>강좌 개설하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
                    <S.SortBtnWrap>
                        <S.LectureSortBtn>최신순</S.LectureSortBtn>
                        <S.SepLine></S.SepLine>
                        <S.LectureSortBtn>오래된 순</S.LectureSortBtn>
                    </S.SortBtnWrap>
                </S.LectureBtnWrap>
                <MypageLectureCardS Lecturetype='Apply' />
                {/* <EmptyCard text1={'현재 진행중인 강좌가 없습니다.'} text2={'새로 강좌를 개설해주세요!'} /> */}
            </Mypage>
        </>
    );
}

export default ApplyLectureList;
