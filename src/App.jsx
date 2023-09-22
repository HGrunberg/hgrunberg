import React, { useEffect, useState } from 'react'
import i18next from "./translation/i18next";

import Navbar from "./components/navbar/Navbar"
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlanioPage from "./pages/PlanioPage";
import CVPage from "./pages/CVPage";
import ReactLoading from 'react-loading';

import './app.css'
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './helperFunctions/ScrollToTop';


function App() {

  let [loading, setLoading] = useState(true);


  useEffect(() => {
    const prefLng = localStorage.getItem("prefLng")
    if (prefLng) {
      i18next.changeLanguage(prefLng)
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <>
        <div className='center-items'>
          <ReactLoading type={"bubbles"} color={"#00c6b4"} height={'50%'} width={'50%'} />
        </div>
      </>
    )
  }

  return (
    <>
      <ToastContainer />

      <main>
        <Navbar />
        <h2></h2>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planio" element={<PlanioPage />} />
          <Route path="/my-cv" element={<CVPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      <ScrollToTop />
    </>
  )
}

export default App
