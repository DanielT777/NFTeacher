import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Teacher from './Components/Teacher'
import Student from './Components/Student'
import LearnMore from './Components/LearnMore'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="student" exact element={<Student />} />
            <Route path="teacher" exact element={<Teacher />} />
            <Route path="learnmore" exact element={<LearnMore />} />
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);