import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Mypage from './pages/Mypage/Mypage';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
