import React from 'react';

import './App.css';

import Main from './components/Main';
import Header from './components/Header';

import { Route, BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header></Header>
                <div className="container">
                    <Main></Main>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
