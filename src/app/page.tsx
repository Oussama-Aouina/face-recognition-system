import { Metadata } from 'next';
import './globals.css';

import DefaultLayout from '@/components/DefaultLayout/DefaultLayout';
import RecognitionSystem from '@/components/RecognitionSystem/RecognitionSystem';
export const metadata: Metadata = {
    title: 'Recognizer',
    description: 'Facial recognition system',
    icons: {
        apple: ['/images/favicons/apple-icon.png'], // Fix: Add the 'appleTouchIcon' property with the correct value
        icon: ['/images/favicons/favicon.ico?v4'],
        shortcut: ['/images/favicons/apple-icon.png?v4'],
    },
    manifest: '/images/favicons/site.webmanifest',
};
export default function Home() {
    return (
        <DefaultLayout>
            <RecognitionSystem />
        </DefaultLayout>
    );
}
