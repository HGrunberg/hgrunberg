import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import AboutMe from "../homeSections/AboutMe";
import WhyMe from "../homeSections/WhyMe";
import { MuiContactForm } from "../homeSections/MuiContactForm";
import HeroSection from "../homeSections/HeroSection";
import Projects from "../components/Projects";


export default function HomePage() {

    const { t } = useTranslation()

    return (
        <>

            <section className="page" id="homePageId">
                <HeroSection />

                <AboutMe />
                
                {/* made with hover.dev */}
                <Projects />

                <WhyMe />

                <MuiContactForm />
            </section>



        </>
    );
}
