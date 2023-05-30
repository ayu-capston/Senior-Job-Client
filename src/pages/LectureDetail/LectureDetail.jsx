import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import postAPI from '../../api/postAPI';
import LectureDetailNav from '../../components/PageNav/LectureDetailNav';
import LectureMainInfo from '../../components/LectureMainInfo/LectureMainInfo';
import LectureInfo from '../../components/LectureInfo/LectureInfo';
import ContentHeader from '@components/ContentHeader/ContentHeader';
import Logo from '../../assets/images/Logo.svg';
import NotFountImg from '../../assets/images/Image-Not-Found.svg';
import * as S from './StyledLectureDetail';

const LectureDetail = () => {
    const { lectureid } = useParams();
    const [lectureData, setLectureData] = useState();

    useEffect(() => {
        const getLectureData = async () => {
            try {
                const data = await postAPI.getPostDetail(lectureid);
                setLectureData(data);
            } catch (error) {
                console.log(error);
            }
        };
        getLectureData();
    }, []);

    const paramArr = { '강좌 수강': '/lecture', '강좌 상세보기': '/lecture/detail' };

    return (
        <>
            <S.LectureDetailWrap>
                <h1 className='hidden'>강좌 상세 페이지</h1>
                <LectureDetailNav />
                {/* <ContentHeader {...paramArr} /> */}
                <S.LecturePostWrap>
                    <h2 className='hidden'>강좌 주요 내용</h2>
                    {lectureData && (
                        <>
                            <S.LectureTitle>{lectureData.title}</S.LectureTitle>
                            <S.LectureInfoWrap>
                                <S.LectureCardWrap>
                                    <h3 className='hidden'>강좌 개설자, 가격, 진행일정, 인원 정보</h3>
                                    <img src={NotFountImg} alt='배경 이미지' />
                                    <div>
                                        <S.InstructorWrap>
                                            <img src={Logo} alt='사람 이미지' />
                                            <span>{lectureData.author}</span>
                                        </S.InstructorWrap>
                                        <LectureMainInfo type='cost' price={lectureData.price} />
                                        <LectureMainInfo type='schedule' startdate={lectureData.start_date} enddate={lectureData.end_date} />
                                        <LectureMainInfo type='total' maxparticipants={lectureData.max_participants} />
                                        <S.ApplyBtn>
                                            <span>7일 남았어요!</span>
                                            참여 신청하기
                                        </S.ApplyBtn>
                                    </div>
                                </S.LectureCardWrap>
                                <LectureInfo type='region' region={lectureData.region} />
                                <LectureInfo type='lectureContent' content={lectureData.content} />
                                <LectureInfo
                                    type='payment'
                                    bankname={lectureData.bank_name}
                                    accountnumber={lectureData.account_number}
                                    accountname={lectureData.account_name}
                                />
                                <LectureInfo type='question' />
                            </S.LectureInfoWrap>
                        </>
                    )}
                </S.LecturePostWrap>
                <S.MoveListLink to='/lecture'>목록으로 돌아가기</S.MoveListLink>
            </S.LectureDetailWrap>
        </>
    );
};

export default LectureDetail;
