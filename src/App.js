import React from "react";
import { Route, Routes } from "react-router-dom";
import Locations from "views/Locations";
import ModalRoot from "views/ModalRoot/container";

const App = () => (
    <>
        <Routes>
            <Route path="/" element={<Locations />} />
        </Routes>
        <ModalRoot />
    </>
);

export default App;
