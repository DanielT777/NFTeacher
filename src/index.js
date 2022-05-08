import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Teacher from './Components/Teacher'
import Student from './Components/Student'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="student" exact element={<Student />} />
            <Route path="teacher" exact element={<Teacher />} />
        </Routes>
        </BrowserRouter>
    </React.StrictMode>
);