import { useNavigate } from 'react-router-dom';
import Mypage from '../Mypage/Mypage';
import MypageLectureCardPA from '~/components/MypageLectureCard/MypageLectureCardPA';
import EmptyCard from '~/components/EmptyCard/EmptyCard';
import * as S from './StyledApplyLectureList';

function ApplyLectureList() {
    const navigate = useNavigate();

    const handleGoForm = () => {
        navigate('/mypage/lecture/form/propose');
    };

    return (
        <>
            <Mypage>
                <S.OpenLectureTitle>참여 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>배우고 싶은 강좌가 없나요? 새롭게 제안해보세요!</S.BannerTitle>
                    <S.BannerBtn onClick={handleGoForm}>강좌 제안하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
                    <S.SortBtnWrap>
                        <S.LectureSortBtn>최신순</S.LectureSortBtn>
                        <S.SepLine></S.SepLine>
                        <S.LectureSortBtn>오래된 순</S.LectureSortBtn>
                    </S.SortBtnWrap>
                </S.LectureBtnWrap>
                <MypageLectureCardPA Lecturetype='Apply' />
                {/* <EmptyCard text1={'현재 진행중인 강좌가 없습니다.'} text2={'새로 강좌를 개설해주세요!'} /> */}
            </Mypage>
        </>
    );
}

export default ApplyLectureList;
