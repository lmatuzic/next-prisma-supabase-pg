import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Login',
	description: 'Login to continue using Sausikebana.',
};

export default function LoginPage() {
	return (
		<>
			<SignIn />
		</>
	);
}
