import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";

//Remote modules
import DemoHome from "demo/Home";
import DemoPage1 from "demo/Page1";
import DemoPage2 from "demo/Page2";
import AnotherHome from "another/Home";
import AnotherPage1 from "another/Page1";
import AnotherPage2 from "another/Page2";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="demo" element={<DemoHome />} />
                <Route path="demo/1" element={<DemoPage1 />} />
                <Route path="demo/2" element={<DemoPage2 />} />
                <Route path="another" element={<AnotherHome />} />
                <Route path="another/1" element={<AnotherPage1 />} />
                <Route path="another/2" element={<AnotherPage2 />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;