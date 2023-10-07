import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
