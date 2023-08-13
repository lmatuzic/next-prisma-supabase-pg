import { ReactNode } from 'react';

export default function EventsLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='en' className='min-h-screen'>
			<body>{children}</body>
		</html>
	);
}
