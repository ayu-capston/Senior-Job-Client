import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LectureList from '@pages/LectureList/LectureList';
import LectureDetail from '@pages/LectureDetail/LectureDetail';
import Mypage from '@pages/Mypage/Mypage';
import CreateLecture from '@pages/CreateLecture/CreateLecture';
import MainPage from '~/pages/MainPage/MainPage';
import Login from '~/pages/Login/Login';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/lecture' element={<LectureList />} />
                <Route path='/lecture/detail/:createid' element={<LectureDetail />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage/lecture/created/form' element={<CreateLecture />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
