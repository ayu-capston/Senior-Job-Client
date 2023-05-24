import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Mypage from './pages/Mypage/Mypage';
import CreateLecture from './pages/CreateLecture/CreateLecture';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/mypage' element={<Mypage />} />
                <Route path='/mypage/lecture/create' element={<CreateLecture />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
