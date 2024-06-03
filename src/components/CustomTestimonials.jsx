
import { Dispatch, SetStateAction, useState } from "react";
import { motion } from "framer-motion";


const CustomTestimonials = () => {
    const [selected, setSelected] = useState(0);

    return (
        <section className="bg-light ">
            <div className="max-w-7xl mx-auto py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">

                <div className="p-4">
                    <h3 className="text-5xl font-semibold">What our customers think</h3>
                    <p className="text-slate-500 my-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
                        commodi sint, similique cupiditate possimus suscipit delectus illum
                        eos iure magnam!
                    </p>
                    <SelectBtns
                        numTracks={testimonials.length}
                        setSelected={setSelected}
                        selected={selected}
                    />
                </div>
                <Cards
                    testimonials={testimonials}
                    setSelected={setSelected}
                    selected={selected}
                />
            </div>
        </section>
    );
};

const SelectBtns = ({ numTracks, setSelected, selected }) => {

    return (
        <div className="flex gap-4 mt-8">
            {Array.from(Array(numTracks).keys()).map((n) => {
                return (
                    <button
                        key={n}
                        onClick={() => setSelected(n)}
                        className="h-4 w-full bg-dark rounded-r-full relative"
                    >
                        {selected === n ? (
                            <motion.span
                                className="absolute top-0 left-0 bottom-0 rounded-r-full bg-primary"
                                initial={{
                                    width: "0%",
                                }}
                                animate={{
                                    width: "100%",
                                }}
                                transition={{
                                    duration: 7.5,
                                }}
                                onAnimationComplete={() => {
                                    setSelected(selected === numTracks - 1 ? 0 : selected + 1);
                                }}
                            />
                        ) : (
                            <span
                                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                                style={{
                                    width: selected > n ? "100%" : "0%",
                                }}
                            />
                        )}
                    </button>
                );
            })}
        </div>
    );
};

const Cards = ({ testimonials, selected, setSelected }) => {
    return (
        <div className="p-4 relative min-h-[500px] ">
            {testimonials.map((t, i) => {
                return (
                    <Card
                        {...t}
                        key={i}
                        position={i}
                        selected={selected}
                        setSelected={setSelected}
                    />
                );
            })}
        </div>
    );
};

const Card = ({
    description,
    descriptionTwo,
    name,
    title,
    position,
    selected,
    setSelected,
}) => {
    const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected);
    const offset = position <= selected ? 0 : 95 + (position - selected) * 3;
    const background = position % 2 ? "white" : "#9E4020";
    const color = position % 2 ? "black" : "white";

    return (
        <motion.div
            initial={false}
            style={{
                zIndex: position,
                transformOrigin: "left bottom",
                background,
                color,
            }}
            animate={{
                x: `${offset}%`,
                scale,
            }}
            whileHover={{
                translateX: position === selected ? 0 : -3,
            }}
            transition={{
                duration: 0.25,
                ease: "easeOut",
            }}
            onClick={() => setSelected(position)}
            className="absolute top-0 left-0 w-full min-h-full p-8  cursor-pointer flex flex-col justify-between"
        >
            <p className="text-lg lg:text-xl font-light italic my-8">
                "{description}
                <br />
                <br />
                {descriptionTwo}"
            </p>
            <div>
                <span className="block font-semibold text-lg">{name}</span>
                <span className="block text-sm">{title}</span>
            </div>
        </motion.div>
    );
};

export default CustomTestimonials;

const testimonials = [
    {
        description: 'Sebastian er den person, der med sit engagement, iver efter at lære og sin gode, humoristiske måde at være på løfter stemningen og den fælles indsats for arbejdsmiljø og kollegialt samarbejde.',
        descriptionTwo: 'Han er en pligtopfyldende, stabil teamplayer, der overholder deadlines, og leverer med substantiel og gennemtænkt kvalitet på et højt niveau. Sebastian får mine varmeste anbefalinger, og hvis jeg skulle sætte en generel karakter på ham, så ville han nok springe skalaen med et gammeldags 13-tal!',
        name: "Lykke",
        title: "Lektor på EAAA",
    },
    {
        description: 'Sebastian er den person, der med sit engagement, iver efter at lære og sin gode, humoristiske måde at være på løfter stemningen og den fælles indsats for arbejdsmiljø og kollegialt samarbejde.',
        descriptionTwo: 'Han er en pligtopfyldende, stabil teamplayer, der overholder deadlines, og leverer med substantiel og gennemtænkt kvalitet på et højt niveau. Sebastian får mine varmeste anbefalinger, og hvis jeg skulle sætte en generel karakter på ham, så ville han nok springe skalaen med et gammeldags 13-tal!',
        name: "Lykke",
        title: "Lektor på EAAA",
    },
    {
        description: 'Sebastian er den person, der med sit engagement, iver efter at lære og sin gode, humoristiske måde at være på løfter stemningen og den fælles indsats for arbejdsmiljø og kollegialt samarbejde.',
        descriptionTwo: 'Han er en pligtopfyldende, stabil teamplayer, der overholder deadlines, og leverer med substantiel og gennemtænkt kvalitet på et højt niveau. Sebastian får mine varmeste anbefalinger, og hvis jeg skulle sætte en generel karakter på ham, så ville han nok springe skalaen med et gammeldags 13-tal!',
        name: "Lykke",
        title: "Lektor på EAAA",
    },
    {
        description: 'Sebastian er den person, der med sit engagement, iver efter at lære og sin gode, humoristiske måde at være på løfter stemningen og den fælles indsats for arbejdsmiljø og kollegialt samarbejde.',
        descriptionTwo: 'Han er en pligtopfyldende, stabil teamplayer, der overholder deadlines, og leverer med substantiel og gennemtænkt kvalitet på et højt niveau. Sebastian får mine varmeste anbefalinger, og hvis jeg skulle sætte en generel karakter på ham, så ville han nok springe skalaen med et gammeldags 13-tal!',
        name: "Lykke",
        title: "Lektor på EAAA",
    },
    {
        description: 'Sebastian er den person, der med sit engagement, iver efter at lære og sin gode, humoristiske måde at være på løfter stemningen og den fælles indsats for arbejdsmiljø og kollegialt samarbejde.',
        descriptionTwo: 'Han er en pligtopfyldende, stabil teamplayer, der overholder deadlines, og leverer med substantiel og gennemtænkt kvalitet på et højt niveau. Sebastian får mine varmeste anbefalinger, og hvis jeg skulle sætte en generel karakter på ham, så ville han nok springe skalaen med et gammeldags 13-tal!',
        name: "Lykke",
        title: "Lektor på EAAA",
    },
    {
        description: 'Sebastian er den person, der med sit engagement, iver efter at lære og sin gode, humoristiske måde at være på løfter stemningen og den fælles indsats for arbejdsmiljø og kollegialt samarbejde.',
        descriptionTwo: 'Han er en pligtopfyldende, stabil teamplayer, der overholder deadlines, og leverer med substantiel og gennemtænkt kvalitet på et højt niveau. Sebastian får mine varmeste anbefalinger, og hvis jeg skulle sætte en generel karakter på ham, så ville han nok springe skalaen med et gammeldags 13-tal!',
        name: "Lykke",
        title: "Lektor på EAAA",
    },
];