import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import LectureInfo from '@components/LectureInfo/LectureInfo';
import Logo from '../../assets/images/Logo.svg';
import NotFoundImg from '../../assets/images/Image-Not-Found.svg';
import { pListSample } from '~/constants/psample';
import * as S from './StyledProposeLectureDetail';
import useModal from '~/hooks/useModal';
import MainModal from '~/components/Modals/MainModal';
import InnerModal from '~/components/Modals/InnerModal';

const ProposeLectureDetail = () => {
    const { createid } = useParams();
    const navigate = useNavigate();
    const [lectureData, setLectureData] = useState<LectureData | null | undefined>(null);
    const [isShowModal, isShowInnerModal, handleShowModal, handleCloseModal, handleShowInnerModal, handleCloseInnerModal] = useModal();

    useEffect(() => {
        const getLectureData = async () => {
            try {
                // const data = await postAPI.getPostDetail(createid);
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                const data = pListSample?.content?.[parseInt(createid!) - 1];
                console.log(data);
                setLectureData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getLectureData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleGoListPage = () => {
        navigate('/mypage/lecture/apply');
    };
    const paramArr = { '강좌 제안': '/propose', '강좌 상세보기': '/propose/detail' };
    return (
        <>
            <S.LectureDetailWrap>
                <h1 className='hidden'>강좌 상세 페이지</h1>
                <S.NavWrap>
                    <ContentHeader {...paramArr} />
                </S.NavWrap>
                <S.LecturePostWrap>
                    <h2 className='hidden'>강좌 주요 내용</h2>
                    {lectureData && (
                        <>
                            <S.LectureInfoWrap>
                                <S.LectureTitleWrap>
                                    <S.LectureTitle>{lectureData.title}</S.LectureTitle>
                                    <S.InstructorInfoWrap>
                                        <img src={Logo} alt='프로필 이미지' />
                                        <span>{lectureData.creator}</span>
                                    </S.InstructorInfoWrap>
                                </S.LectureTitleWrap>
                                <LectureInfo type='region' lecturetype='propose' region={lectureData.region} />
                                <LectureInfo type='lectureContent' lecturetype='propose' content={lectureData.content} />
                                <LectureInfo type='price' price={lectureData.price} />
                                <LectureInfo
                                    type='schedule'
                                    startdate={lectureData.start_date}
                                    enddate={lectureData.end_date}
                                    cycle={lectureData.cycle}
                                    count={lectureData.count}
                                />
                                <LectureInfo type='question' />
                            </S.LectureInfoWrap>
                        </>
                    )}
                </S.LecturePostWrap>
                <S.BtnWrap>
                    <S.MoveBtn onClick={handleShowModal}>모집 지원하기</S.MoveBtn>
                    <S.MoveBtn
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        목록으로 돌아가기
                    </S.MoveBtn>
                </S.BtnWrap>
            </S.LectureDetailWrap>

            {!isShowModal ? null : (
                <MainModal
                    closeModal={handleCloseModal}
                    showInnerModal={handleShowInnerModal}
                    btnText='지원 신청하기'
                    text1='지원자님의 이력을 소개해주세요! (선택)'
                    text2='지원자님의 이력과 하고 싶은 말을 자유롭게 적어주세요.'
                />
            )}
            {!isShowInnerModal ? null : (
                <InnerModal
                    closeInnerModal={handleCloseInnerModal}
                    movePage={handleGoListPage}
                    desc='강좌 신청 완료 모달'
                    text1='지원 신청이 정상적으로 이루어졌습니다.'
                    text2='제안자의 승인을 기다려주세요!'
                    moveText='내가 지원한 강좌 목록 보러가기'
                />
            )}
        </>
    );
};

export default ProposeLectureDetail;
