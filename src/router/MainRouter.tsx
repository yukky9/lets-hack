import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneralPage from "../components/pages/GeneralPage/GeneralPage";
import ModalPage from "../components/pages/ModalPage/ModalPage";

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GeneralPage/>}/>
                <Route path="/socialmedia" element={<ModalPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default MainRouter;