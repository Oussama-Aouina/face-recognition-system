import Navbar from '../Navbar/Navbar';

export default function DefaultLayout({
    children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
    return (
        <main className="flex min-h-[100vh] w-full flex-col items-center bg-background text-white">
            <Navbar />
            {children}
        </main>
    );
}
