import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import CustomH2 from "./CustomH2";
import { useTranslation } from "react-i18next";
import Reveal from "./Reveal";

const Projects = () => {
    return (
        <div className="bg-primary">
            <div className="mx-auto max-w-7xl w-4/5">
                <HorizontalScrollCarousel />
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {

    const { t } = useTranslation()

    const cards = [
        {
            link: "https://play.google.com/store/apps/details?id=com.planiobeta",
            url: "https://play-lh.googleusercontent.com/b_Drp-kaK_R_PAn2cCa1rN9nj9MUhLw_eqpBUP_M4b3oFmyt8-WNARdMfV8wOJapnYU=w240-h480",
            title: `${t('projectsSection.planioProject.title')}`,
            description: `${t('projectsSection.planioProject.description')}`
        },
        {
            link: "https://cookiecare.io/",
            url: "https://www.wpnordic.com/wp-content/uploads/2023/09/Mask-Group-3.svg",
            title: `${t('projectsSection.cookiecareProject.title')}`,
            description: `${t('projectsSection.cookiecareProject.description')}`,
        },
        {
            link: "https://annes.hgrunberg.dk/",
            url: "",
            title: `${t('projectsSection.annesProject.title')}`,
            description: `${t('projectsSection.annesProject.description')}`,
            grade: `${t('projectsSection.grade')}: 12`,
            login: `E-mail: shg@gmail.com, ${t('projectsSection.password')}: 123456`,
        },
    ];

    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh]">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">

                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card, index) => {
                        return <Card card={card} key={index} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <a href={`${card.link}`} target="_blank"
            key={card.index}
            className="customBorderPrimary group relative h-[450px] w-[350px] sm:w-[450px] overflow-hidden bg-lighterDark"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="bg-lighterDark bg-opacity-60 backdrop-blur-sm absolute inset-0 z-10 grid place-content-center">
                <div className="bg-lighterDark bg-opacity-60 backdrop-blur-sm">
                    <p className="px-2 sm:px-8 pt-4 text-2xl sm:text-4xl uppercase font-Comfortaa text-primary">
                        {card.title}
                    </p>
                    <p className="px-2 sm:px-8 pb-4 w-60 sm:w-full text-sm sm:text-xl font-Comfortaa text-light">
                        {card.description}
                    </p>
                    <p className="px-2 sm:px-8 pb-4 text-sm text-light font-Comfortaa">
                        {card.grade}
                    </p>
                    <p className="px-2 sm:px-8 pb-4 text-sm text-light font-Comfortaa">
                        {card.login}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Projects;