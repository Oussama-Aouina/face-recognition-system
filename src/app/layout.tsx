import { Inter, Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.className} h-full w-full bg-background`}>
                {children}
            </body>
        </html>
    );
}
