import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LectureDetail from '@pages/LectureDetail/LectureDetail';
import Mypage from '@pages/Mypage/Mypage';
import CreateLecture from '@pages/CreateLecture/CreateLecture';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/lecture/detail' element={<LectureDetail />} />
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage/lecture/create' element={<CreateLecture />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
