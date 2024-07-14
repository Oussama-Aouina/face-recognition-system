'use client';
import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { use, useEffect, useState } from 'react';
import Loader from '@/components/Loader/Loader';

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
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, []);

    return (
        <html lang="en">
            <body className={`${roboto.className} h-full w-full bg-background`}>
                {loading ? <Loader /> : children}
            </body>
        </html>
    );
}
