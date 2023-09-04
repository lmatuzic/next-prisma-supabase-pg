import { EVENTS_PAGE, HOME_PAGE } from '@/app/constants/routePaths';
import { UserButton, currentUser } from '@clerk/nextjs';
import Link from 'next/link';
import ThemeToggleButton from '../button/ThemeToggleButton';
import MobileNavigation from './MobileNavigation';

export default async function Navigation() {
	const user = await currentUser();

	return (
		<nav className='w-full py-2 mb-8 border-b'>
			<div className='container flex items-center justify-between'>
				<Link href={HOME_PAGE} className='hidden sm:flex'>
					Logo
				</Link>

				<ul className='flex justify-between w-full sm:w-auto sm:items-center'>
					{user && (
						<li className='hidden mr-6 sm:flex'>
							<Link href={EVENTS_PAGE}>Events</Link>
						</li>
					)}

					{user && (
						<li className='hidden mr-6 sm:flex'>
							<UserButton afterSignOutUrl={HOME_PAGE} />
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
