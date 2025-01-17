import React, { useEffect, useState } from 'react'

const ScrollProgressBar: React.FC = () => {
    const [progressBar, setProgressBar] = useState<number>(0);

    const handleSroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        let scrolledPosition = 0;

        if (windowHeight > 999)
            scrolledPosition = (scrollPosition / windowHeight) * 100;

        setProgressBar(scrolledPosition);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleSroll);

        return () => {
            window.removeEventListener("scroll", handleSroll);
        };
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 z-[99] h-1 transition-all ease-linear duration-300 bg-gradient-to-tr from-primary/40 to-primary rounded-full`}
            style={{ width: `${progressBar}%` }}
            role="progressbar"
            aria-label="Barre de progression de défilement"
            aria-valuenow={progressBar}
            aria-valuemin={0}
            aria-valuemax={100}
        >
        </div>
    )
}

export default ScrollProgressBar