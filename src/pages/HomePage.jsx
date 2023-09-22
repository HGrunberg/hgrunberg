import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import AboutMe from "../sections/AboutMe";
import WhyMe from "../sections/WhyMe";
import { MuiContactForm } from "../sections/MuiContactForm";
import HeroSection from "../sections/HeroSection";

export default function HomePage() {

    const { t } = useTranslation()

    return (
        <section className="page">
            <HeroSection />
            
            <AboutMe />

            <WhyMe />

            <MuiContactForm />

        </section>
    );
}
