import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
    return (
        <div className="bg-primary">
            <div className="mx-auto w-4/5">
                <HorizontalScrollCarousel />
            </div>
        </div>
    );
};

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

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
            className="group relative h-[450px] w-[450px] overflow-hidden bg-lighterDark"
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
                    <p className=" px-8 pt-4 text-4xl font-black uppercase text-primary">
                        {card.title}
                    </p>
                    <p className="px-8 pb-4 text-xl font-black text-light">
                        {card.description}
                    </p>
                    <p className="px-8 pb-4 text-sm font-black text-light">
                        {card.login}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Projects;

const cards = [
    {
        link: "https://play.google.com/store/apps/details?id=com.planiobeta",
        url: "https://play-lh.googleusercontent.com/b_Drp-kaK_R_PAn2cCa1rN9nj9MUhLw_eqpBUP_M4b3oFmyt8-WNARdMfV8wOJapnYU=w240-h480",
        title: "Planio",
        description: "Planio viser mine kompetencer og evne til at stå inde for mit arbejde",
    },
    {
        link: "https://cookiecare.io/",
        url: "https://www.wpnordic.com/wp-content/uploads/2023/09/Mask-Group-3.svg",
        title: "Cookiecare.io",
        description: "Jeg er lavet i Elementor under min praktik hos Brand by Hand",
    },
    {
        link: "https://annes.hgrunberg.dk/",
        url: "",
        title: "Annes Frokost",
        description: "Eksamen 2023 sammen med Christoffer.",
        login: "E-mail: shg@gmail.com kode: 123456",
    },

];