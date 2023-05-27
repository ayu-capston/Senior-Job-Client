import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import paintImg from './paintimg.jpg';
import personImg from './personimg.jpg';
import LectureDetailNav from '../../components/PageNav/LectureDetailNav';
import LectureMainInfo from '../../components/LectureMainInfo/LectureMainInfo';
import LectureInfo from '../../components/LectureInfo/LectureInfo';

const LectureDetail = () => {
    return (
        <>
            <section>
                <h1 className='hidden'>강좌 상세 페이지</h1>
                <LectureDetailNav />
                <h2>강좌 제목</h2>
                <section>
                    <h3 className='hidden'>강좌 주요 정보</h3>
                    <section>
                        <h4 className='hidden'>강좌 개설자, 가격, 진행일정, 인원 정보</h4>
                        <img src={paintImg} alt='배경 이미지' />
                        <div>
                            <div>
                                <img src={personImg} alt='사람 이미지' />
                                <span>김땡땡땡</span>
                            </div>
                            <LectureMainInfo type='cost' />
                            <LectureMainInfo type='schedule' />
                            <LectureMainInfo type='total' />
                        </div>
                        <button>
                            <span>7일 남았어요!</span>
                            참여 신청하기
                        </button>
                    </section>
                    <LectureInfo type='region' />
                    <LectureInfo type='lectureContent' />
                    <LectureInfo type='payment' />
                    <LectureInfo type='question' />
                </section>
                <Link to='/lecture'>목록으로 돌아가기</Link>
            </section>
            <Footer />
        </>
    );
};

export default LectureDetail;
