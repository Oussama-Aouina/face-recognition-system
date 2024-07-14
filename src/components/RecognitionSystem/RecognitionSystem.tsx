'use client';
import { useEffect, useState } from 'react';
import FilesDisplayer from '../Displayers/FilesDisplayer';
import ResultDisplayer from '../Displayers/ResultDisplayer';
import StatisticsDisplayer from '../Displayers/StatisticsDisplayer';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
        <section className="sm:px-32 flex h-full w-full flex-col items-center justify-center gap-8 px-8 pt-8 md:px-64">
            <div className="flex flex-col items-center justify-center">
                <h1 className="animate-slidein text-4xl font-bold opacity-0 [--slidein-delay:300ms]">
                    Facial recognition system{' '}
                </h1>
                <p className="animate-slidein mt-5 text-lg opacity-0 [--slidein-delay:400ms] ">
                    Max image size after processing: 25 megapixels
                </p>
            </div>
            <FilesDisplayer activateComparing={setIsReadyToCompare} />
            <div className="animate-slidein opacity-0 [--slidein-delay:500ms]">
                <button
                    className={`${!isReadyToCompare && 'opacity-70'} flex h-[41px] w-[134px] items-center justify-center rounded-full bg-activeButton px-6 py-1 text-lg opacity-100 hover:animate-none`}
                    onClick={handleComparing}
                    disabled={!isReadyToCompare}
                >
                    {isComparing ? (
                        <div className="flex w-full  items-center justify-center ">
                            {/* {Array.from({ length: 4 }, (_, index) => (
                            <span
                                key={index}
                                className={`animate-bounce text-4xl font-bold transition-all`}
                            >
                                .
                            </span>
                        ))} */}
                            <AiOutlineLoading3Quarters
                                height={20}
                                width={20}
                                className=" h-6 w-6 animate-spin text-orange-200"
                            />
                        </div>
                    ) : (
                        'Compare'
                    )}
                </button>
            </div>

            <ResultDisplayer result={resultIsReady} />
            <StatisticsDisplayer result={resultIsReady} />
        </section>
    );
}
