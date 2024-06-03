import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const DisappearingFeatures = () => {
    return (
        <>
            <div className="relative h-fit bg-[#9E4020]">
                <Features />
            </div>

        </>
    );
};

const Features = () => {
    return (
        <div className="relative mx-auto grid h-full w-full max-w-7xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
            <Copy />
            <Carousel />
        </div>
    );
};

const Copy = () => {
    return (
        <div className="flex h-fit w-full flex-col justify-center py-12 md:sticky md:top-0 md:h-screen">
            <span className="w-fit rounded-full bg-indigo-500 px-4 py-2 text-sm uppercase text-indigo-100">
                Projekter
            </span>
            <h2 className="mb-4 mt-2 text-5xl font-medium leading-tight">
                Lorem ipsum dolor sit amet consectetur 
            </h2>
            <p className="text-lg text-indigo-950">
                Projekterne viser min evne til at arbejde med flere værktøjer
                Projekterne viser min evne til at arbejde med flere værktøjer
                Projekterne viser min evne til at arbejde med flere værktøjer
                Projekterne viser min evne til at arbejde med flere værktøjer

            </p>
        </div>
    );
};

const Carousel = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const { t } = useTranslation()

    const cards = [
        {
            link: "https://play.google.com/store/apps/details?id=com.planiobeta",
            url: "/Planio.JPG",
            title: `${t('projectsSection.planioProject.title')}`,
            description: `${t('projectsSection.planioProject.description')}`
        },
        {
            link: "https://annes.hgrunberg.dk/",
            url: "/Annes.JPG",
            title: `${t('projectsSection.annesProject.title')}`,
            description: `${t('projectsSection.annesProject.description')}`,
            grade: `${t('projectsSection.grade')}: 12`,
            login: `E-mail: shg@gmail.com, ${t('projectsSection.password')}: 123456`,
        },
        {
            link: "https://tpi-ea.dk/",
            url: "/TPI.JPG",
            title: `${t('projectsSection.tpi-eaProject.title')}`,
            description: `${t('projectsSection.tpi-eaProject.description')}`,
        },
        {
            link: "https://cookiecare.io/",
            url: "Cookiecare.JPG",
            title: `${t('projectsSection.cookiecareProject.title')}`,
            description: `${t('projectsSection.cookiecareProject.description')}`,
        },
    ];


    return (
        <div className="relative w-full ">
            <Gradient />

            <div ref={ref} className="relative z-0 flex flex-col gap-6 md:gap-12">

                {cards.map((card, index) => {
                    return <CarouselItem scrollYProgress={scrollYProgress}
                        position={index + 1}
                        numItems={cards.length} key={index} card={card} />;
                })}

            </div>

            <Buffer />
        </div>
    );
};

const CarouselItem = ({ scrollYProgress, position, numItems, card }) => {
    const stepSize = 1 / numItems;
    const end = stepSize * position;
    const start = end - stepSize;

    const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
    const scale = useTransform(scrollYProgress, [start, end], [1, 0.75]);

    return (
        <a href={`${card.link}`} target="_blank" className="bg-no-repeat object-cover bg-[#EEF2FF] rounded">

            <motion.div
                style={{
                    opacity,
                    scale,
                }}
                className="grid aspect-video w-full shrink-0   "
            >
                <img src={card.url} className="w-[250px] ml-auto rounded-tr" alt="" />
                <p className="px-2 sm:px-8 pt-4 text-2xl sm:text-4xl uppercase font-Comfortaa text-dark">
                    {card.title}
                </p>
                <p className="px-2 sm:px-8 pb-4 w-60 sm:w-full text-sm sm:text-xl font-Comfortaa text-dark">
                    {card.description}
                </p>
                <p className="px-2 sm:px-8 pb-4 text-sm text-dark font-Comfortaa">
                    {card.grade}
                </p>
                <p className="px-2 sm:px-8 pb-4 text-sm text-dark font-Comfortaa">
                    {card.login}
                </p>
            </motion.div>
        </a >
    );
};

const Gradient = () => (
    <div className="sticky top-0 z-10 hidden h-24 w-full bg-gradient-to-b from-indigo-50 to-indigo-50/0 md:block" />
);

const Buffer = () => <div className="h-24 w-full md:h-48" />;