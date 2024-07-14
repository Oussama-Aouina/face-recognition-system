import { IoMdTime } from 'react-icons/io';
import { MdOutlineFileDownload, MdOutlineRadar } from 'react-icons/md';

export default function StatisticsDisplayer({
    result,
}: {
    result: boolean;
}): JSX.Element {
    return (
        <div
            className={`${!result && 'hidden'} mb-8 flex w-full items-center justify-center px-4`}
        >
            <ul className="animate-slidein flex w-full items-center  justify-between opacity-0 [--slidein-delay:600ms] max-md:gap-2">
                <li className="flex items-center gap-4">
                    <span className="rounded-xl bg-statColor p-2">
                        <MdOutlineRadar className="text-2xl text-white md:text-4xl" />
                    </span>
                    <p className="text-statColor md:text-2xl">
                        100% recognized
                    </p>
                </li>
                <li className="flex items-center gap-4">
                    <span className="rounded-xl bg-statColor p-2">
                        <IoMdTime className="text-2xl text-white md:text-4xl" />
                    </span>
                    <p className="text-statColor md:text-2xl">
                        Time: 1.2 second
                    </p>
                </li>
                <li className="flex items-center gap-4">
                    <span className="rounded-xl bg-statColor p-2">
                        <MdOutlineFileDownload className="text-2xl text-white md:text-4xl" />
                    </span>
                    <p className="text-statColor md:text-2xl">
                        Download as <u className="cursor-pointer">PDF</u>&nbsp;
                        <u className="cursor-pointer">JPEG</u>
                    </p>
                </li>
            </ul>
        </div>
    );
}
