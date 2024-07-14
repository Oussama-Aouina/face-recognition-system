'use client';

import { useEffect, useState } from 'react';

const Loader = () => {
    const [textReady, setTextReady] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setTextReady(true);
        }, 500);
    });

    return (
        <div className="flex h-screen flex-col items-center justify-center ">
            {/* <div className="border-primary h-16 w-16 animate-spin rounded-full border-4 border-solid border-t-transparent "></div> */}
            <div className="flex w-full items-center justify-center gap-2 ">
                <span className="animation-delay-100  animate-bounce text-8xl font-extrabold text-white">
                    .
                </span>
                <span className="-animation-delay-175 animate-bounce text-8xl font-extrabold text-blue-500">
                    .
                </span>
                <span className="animation-delay-75 animate-bounce text-8xl font-extrabold text-orange-400">
                    .
                </span>
            </div>
            <div className="flex h-10 items-center gap-2">
                {textReady &&
                    'welcome'.split('').map((letter, index) => (
                        <span
                            key={index}
                            className={` animate-slidein text-6xl font-bold text-white opacity-0 [--slidein-delay:300ms]`}
                        >
                            {letter}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default Loader;
