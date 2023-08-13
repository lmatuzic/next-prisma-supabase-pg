import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggleButton from '../button/ThemeToggleButton';
import MobileNavigation from './MobileNavigation';
import { currentUser } from '@clerk/nextjs';

export default async function Navigation() {
	const user = await currentUser();

	console.log(user?.firstName);

	return (
		<nav className='w-full px-4 py-2 mb-8 border-b'>
			<div className='container flex items-center justify-between p-0'>
				<Link href={'/'} className='hidden sm:flex'>
					Logo
				</Link>

				<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					{user && (
						<li className='hidden mr-6 sm:flex'>
							<Link href={'/dashboard'}>Dashboard</Link>
						</li>
					)}

					{user && (
						<li className='hidden mr-6 sm:flex'>
							<UserButton afterSignOutUrl='/' />
						</li>
					)}

					<li>
						<ThemeToggleButton />
					</li>

					<li className='flex sm:hidden'>
						<MobileNavigation />
					</li>
				</ul>
			</div>
		</nav>
	);
}
