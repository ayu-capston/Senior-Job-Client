import Mypage from '../Mypage/Mypage';
import MypageLectureCardBA from '~/components/MypageLectureCard/MypageLectureCardBA';
import EmptyCard from '~/components/EmptyCard/EmptyCard';
import { useNavigate } from 'react-router-dom';
import * as S from './StyledParticipateLectureList';

function ParticipateLectureList() {
    const navigate = useNavigate();

    const handleGoForm = () => {
        navigate('/mypage/lecture/form/basic');
    };

    return (
        <S.LectureWrap>
            <Mypage>
                <S.OpenLectureTitle>신청 강좌</S.OpenLectureTitle>
                <S.WrapBanner>
                    <S.BannerTitle>인증 받은 경력 정보로 나만의 강좌를 개설해보세요!</S.BannerTitle>
                    <S.BannerBtn onClick={handleGoForm}>강좌 개설하기</S.BannerBtn>
                </S.WrapBanner>
                <S.LectureBtnWrap>
                    <S.SortBtnWrap>
                        <S.LectureSortBtn>최신순</S.LectureSortBtn>
                        <S.SepLine></S.SepLine>
                        <S.LectureSortBtn>오래된 순</S.LectureSortBtn>
                    </S.SortBtnWrap>
                </S.LectureBtnWrap>
                <MypageLectureCardBA Lecturetype='Apply' />
                {/* <EmptyCard text1={'현재 진행중인 강좌가 없습니다.'} text2={'새로 강좌를 개설해주세요!'} /> */}
            </Mypage>
        </S.LectureWrap>
    );
}

export default ParticipateLectureList;
