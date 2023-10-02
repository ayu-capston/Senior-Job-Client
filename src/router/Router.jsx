import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';
import LectureList from '@pages/LectureList/LectureList';
import LectureDetail from '@pages/LectureDetail/LectureDetail';
import Mypage from '@pages/Mypage/Mypage';
import CreateLecture from '@pages/CreateLecture/CreateLecture';
import MainPage from '@pages/MainPage/MainPage';
import OpenLectureList from '@pages/OpenLectureList/OpenLectureList';
import OpenLectureApproval from '@pages/OpenLectureApproval/OpenLectureApproval';
import ProposeLectureDetail from '~/pages/ProposeLectureDetail/ProposeLectureDetail';
import ProposeLectureList from '~/pages/ProposeLectureList/ProposeLectureList';
import ApplyLectureList from '~/pages/ApplyLectureList/ApplyLectureList';
import ParticipateLectureList from '~/pages/ParticipateLectureList/ParticipateLectureList';

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/lecture' element={<LectureList />} />
                <Route path='/lecture/detail/:createid' element={<LectureDetail />} />
                <Route path='/lecture/propose/detail/:createid' element={<ProposeLectureDetail />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage/lecture/created/form' element={<CreateLecture />} />
                <Route path='/mypage/lecture/open' element={<OpenLectureList />} />
                <Route path='/mypage/lecture/open/detail' element={<OpenLectureApproval />} />
                <Route path='/mypage/lecture/propose' element={<ProposeLectureList />} />
                <Route path='/mypage/lecture/apply' element={<ApplyLectureList />} />
                <Route path='/mypage/lecture/participate' element={<ParticipateLectureList />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default Router;
