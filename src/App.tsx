import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Router from './router/Router';
import GlobalStyled from './styles/Globalstyled';

function App() {
    return (
        <>
            <GlobalStyled />
            <Router />
        </>
    );
}

export default App;
