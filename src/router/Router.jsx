import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LectureDetail from '@pages/LectureDetail/LectureDetail';
import Mypage from '@pages/Mypage/Mypage';
import CreateLecture from '@pages/CreateLecture/CreateLecture';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/lecture/detail/:lectureid' element={<LectureDetail />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage/lecture/created/form' element={<CreateLecture />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
