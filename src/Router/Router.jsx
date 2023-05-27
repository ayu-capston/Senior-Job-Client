import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LectureDetail from '../pages/LectureDetail/LectureDetail';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/lecturedetail' element={<LectureDetail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
