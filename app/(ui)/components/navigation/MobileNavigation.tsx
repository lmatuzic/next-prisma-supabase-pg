import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetTrigger } from '../shadcn/Sheet';

export default function MobileNavigation() {
	return (
		<Sheet>
			<SheetTrigger>
				<Menu />
			</SheetTrigger>

			<SheetContent className='pt-12'>
				<SheetDescription>
					This action cannot be undone. This will permanently delete your account and remove your
					data from our servers.
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
}
