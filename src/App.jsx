import React, { useEffect, useRef, useState } from 'react'
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
import RevealFade from './components/RevealFade';
import { use } from 'i18next';


function App() {

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    const prefLng = localStorage.getItem("prefLng")
    if (prefLng) {
      i18next.changeLanguage(prefLng)
    }
    setLoading(false)
  }, [])


  document.addEventListener('scroll', function () {
    var header = document.querySelector('.my-header');

    if (header && window.scrollY !== 0) {
      header.style.backgroundColor = '#244E3E';
    } else {
      header.style.backgroundColor = '#011a11';
    }
  });



  if (loading) {
    return (
      <>
        <div className='center-items'>
          <ReactLoading type={"bubbles"} color={"#d3bb7b"} height={'50%'} width={'50%'} />
        </div>
      </>
    )
  }

  return (
    <>
      <ToastContainer />
      <main className='relative'>
        <div className='sticky top-0 z-50 my-header'>
          <RevealFade>
            <Navbar />
          </RevealFade>
        </div>
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
