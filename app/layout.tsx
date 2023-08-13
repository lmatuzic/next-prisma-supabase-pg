import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers/Providers';
import Navigation from './components/navigation/Navigation';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider
			appearance={{
				variables: {
					colorPrimary: '#141414',
				},
				elements: {
					card: {
						boxShadow: 'none',
						WebkitBoxShadow: 'none',
						border: `1px solid #e5e7eb`,
						borderRadius: '0.5rem',
					},
				},
			}}
		>
			<html lang='en' className='min-h-screen'>
				<body className={`grid place-items-center ${inter.className}`}>
					<Providers>
						<Navigation />
						{children}
					</Providers>
				</body>
			</html>
		</ClerkProvider>
	);
}
