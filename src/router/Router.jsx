import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LectureList from '@pages/LectureList/LectureList';
import ProposalList from '@pages/ProposalList/ProposalList';
import LectureDetail from '@pages/LectureDetail/LectureDetail';
import Mypage from '@pages/Mypage/Mypage';
import MyProfile from '@pages/MyProfile/MyProfile';
import CreateLecture from '@pages/CreateLecture/CreateLecture';
import MainPage from '~/pages/MainPage/MainPage';
import LoginPage from '~/pages/LoginPage/LoginPage';
import SignUpPage from '~/pages/SignUpPage/SignUpPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/signup' element={<SignUpPage />} />
                <Route path='/lecture' element={<LectureList />} />
                <Route path='/proposal' element={<ProposalList />} />
                <Route path='/lecture/detail/:createid' element={<LectureDetail />} />
                <Route path='/mypage' element={<MyProfile />} />
                <Route path='/mypage/profile' element={<MyProfile />} />
                <Route path='/mypage/lecture/created/form' element={<CreateLecture />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
