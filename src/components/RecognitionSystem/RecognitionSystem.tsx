'use client';
import { useEffect, useState } from 'react';
import FilesDisplayer from '../Displayers/FilesDisplayer';
import ResultDisplayer from '../Displayers/ResultDisplayer';
import StatisticsDisplayer from '../Displayers/StatisticsDisplayer';

export default function RecognitionSystem(): JSX.Element {
    const [isComparing, setIsComparing] = useState<Boolean>(false);
    const [isReadyToCompare, setIsReadyToCompare] = useState<Boolean>(false);
    const [resultIsReady, setResultIsReady] = useState<boolean>(false);

    // ...

    useEffect(() => {
        if (isComparing) {
            const timer = setTimeout(() => {
                setResultIsReady(true);
                setIsComparing(false);
            }, 1000);

            return () => clearTimeout(timer);
        }
        if (resultIsReady) {
            document
                .getElementById('result')
                ?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [isComparing, resultIsReady]);

    // ...
    function handleComparing() {
        setIsComparing(!isComparing);
    }
    function handleReadyToCompare() {
        setIsReadyToCompare(!isReadyToCompare);
    }
    return (
        <section className="flex h-full w-full flex-col items-center justify-center gap-8 px-64 pt-8 max-md:px-32">
            <div className="flex flex-col items-center">
                <h1 className="text-4xl font-bold">
                    Facial recognition system{' '}
                </h1>
                <p className="mt-5 text-lg ">
                    Max image size after processing: 25 megapixels
                </p>
            </div>
            <FilesDisplayer activateComparing={setIsReadyToCompare} />
            <button
                className={`${isReadyToCompare && 'opacity-100'} flex h-[41px] w-[134px] items-center justify-center rounded-full bg-activeButton px-6 py-1 text-lg opacity-70 hover:animate-none`}
                onClick={handleComparing}
                disabled={!isReadyToCompare}
            >
                {isComparing ? (
                    <div className="flex w-1/2 animate-bounce items-center justify-center">
                        {Array.from({ length: 4 }, (_, index) => (
                            <span
                                key={index}
                                className={`animate-bounce text-${6 - index}xl font-bold transition-all`}
                            >
                                .
                            </span>
                        ))}
                    </div>
                ) : (
                    'Compare'
                )}
            </button>

            <ResultDisplayer result={resultIsReady} />
            <StatisticsDisplayer result={resultIsReady} />
        </section>
    );
}
