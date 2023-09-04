import { Loader2 as Spinner } from 'lucide-react';

export default function loading() {
	return (
		<div className='flex items-center'>
			<Spinner className='animate-spin' />
			<span className='ml-2 text-sm'>Loading...</span>
		</div>
	);
}
