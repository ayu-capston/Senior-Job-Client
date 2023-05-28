import LectureDetailNav from '../../components/PageNav/LectureDetailNav';
import LectureMainInfo from '../../components/LectureMainInfo/LectureMainInfo';
import LectureInfo from '../../components/LectureInfo/LectureInfo';
import Logo from '../../assets/images/Logo.svg';
import NotFountImg from '../../assets/images/Image-Not-Found.svg';
import * as S from './StyledLectureDetail';

const LectureDetail = () => {
    return (
        <>
            <S.LectureDetailWrap>
                <h1 className='hidden'>강좌 상세 페이지</h1>
                <LectureDetailNav />
                <S.LecturePostWrap>
                    <h2 className='hidden'>강좌 주요 내용</h2>
                    <S.LectureTitle>강좌 제목</S.LectureTitle>
                    <S.LectureInfoWrap>
                        <S.LectureCardWrap>
                            <h3 className='hidden'>강좌 개설자, 가격, 진행일정, 인원 정보</h3>
                            <img src={NotFountImg} alt='배경 이미지' />
                            <div>
                                <S.InstructorWrap>
                                    <img src={Logo} alt='사람 이미지' />
                                    <span>김땡땡땡</span>
                                </S.InstructorWrap>
                                <LectureMainInfo type='cost' />
                                <LectureMainInfo type='schedule' />
                                <LectureMainInfo type='total' />
                                <S.ApplyBtn>
                                    <span>7일 남았어요!</span>
                                    참여 신청하기
                                </S.ApplyBtn>
                            </div>
                        </S.LectureCardWrap>
                        <LectureInfo type='region' />
                        <LectureInfo type='lectureContent' />
                        <LectureInfo type='payment' />
                        <LectureInfo type='question' />
                    </S.LectureInfoWrap>
                </S.LecturePostWrap>
                <S.MoveListLink to='/lecture'>목록으로 돌아가기</S.MoveListLink>
            </S.LectureDetailWrap>
        </>
    );
};

export default LectureDetail;
