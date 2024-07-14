export default function ResultDisplayer({
    result,
}: {
    result: boolean;
}): JSX.Element {
    return (
        <div
            id="result"
            className={`${!result && 'hidden'} flex min-h-[151px] w-full border-spacing-10 flex-col justify-start gap-6 overflow-hidden rounded-xl border-2 border-dashed border-[#6B43FF] bg-[#021D42] px-8 py-4`}
        >
            <ul className="flex items-center justify-around gap-8 max-md:flex-col ">
                <li className="animate-slidein flex items-center justify-start gap-4 opacity-0 [--slidein-delay:200ms] md:flex-col">
                    <p className="text-xl">Full name</p>
                    <span className="text-resultText">Mihed Hassine</span>
                </li>
                <li className="animate-slidein flex  items-center justify-start gap-4 opacity-0 [--slidein-delay:300ms] md:flex-col">
                    <p className="text-xl">Id number</p>
                    <span className="text-resultText">11122111</span>
                </li>
                <li className="animate-slidein flex items-center justify-start gap-4 opacity-0 [--slidein-delay:400ms] md:flex-col">
                    <p className="text-xl">Birthday</p>
                    <span className="text-resultText">14 Mai 2001</span>
                </li>
                <li className="animate-slidein flex items-center justify-start gap-4 opacity-0 [--slidein-delay:500ms] md:flex-col">
                    <p className="text-xl">Adress</p>
                    <span className="text-resultText">Mehdia</span>
                </li>
            </ul>
        </div>
    );
}
