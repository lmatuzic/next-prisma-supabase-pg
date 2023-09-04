'use client';

import { routes } from '@/app/constants/routes';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from '../shadcn/Sheet';

export default function MobileNavigation() {
	const [isOpened, setIsOpened] = useState(false);

	const handleOpenMobileNav = () => {
		setIsOpened(true);
	};

	const handleCloseMobileNav = () => {
		setIsOpened(false);
	};

	return (
		<Sheet open={isOpened} onOpenChange={setIsOpened}>
			<SheetTrigger onClick={handleOpenMobileNav}>
				<Menu />
			</SheetTrigger>

			<SheetContent className='pt-20'>
				<ul className='flex flex-col items-end'>
					{routes.map((route) => (
						<li key={route.path} className='mb-4'>
							<Link href={route.path} onClick={handleCloseMobileNav} className='text-xl'>
								{route.name}
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
}
