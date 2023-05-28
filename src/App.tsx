import React from 'react';
import Router from './router/Router';
import GlobalStyled from './styles/Globalstyled';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

function App() {
    return (
        <>
            <GlobalStyled />
            <Navbar />
            <Router />
            <Footer />
        </>
    );
}

export default App;
