'use client';

import { Button } from '@/app/(ui)/components/shadcn/Button';
import { Check, Star } from 'lucide-react';
import { EventsPrismaResponse } from '../types/UserEvent';
import { useToast } from '@/app/hooks/useToast';

type EventActionsProps = {
	event: EventsPrismaResponse;
	updateEventGoings: (event: EventsPrismaResponse) => Promise<void>;
	updateEventInterests: (event: EventsPrismaResponse) => Promise<void>;
};

export default function EventActions({
	event,
	updateEventGoings,
	updateEventInterests,
}: EventActionsProps) {
	const { toast } = useToast();

	const handleUpdateEventGoings = async () => {
		await updateEventGoings(event);

		toast({
			title: `Have fun on event: ${event.name}!`,
			description: 'Test description goes here.',
		});
	};

	const handleUpdateEventInterests = async () => {
		await updateEventInterests(event);

		toast({
			title: `You're interested in event: ${event.name}!`,
			description: 'Test description goes here.',
		});
	};

	updateEventInterests;

	return (
		<div className='mt-8'>
			<Button onClick={handleUpdateEventGoings} variant='outline' size={'sm'} className='mr-4'>
				<Star className='mr-2' size={'16'} />
				<span className='text-xs'>Going</span>
			</Button>

			<Button onClick={handleUpdateEventInterests} variant='outline' size={'sm'}>
				<Check className='mr-2' size={'16'} />
				<span className='text-xs'>Interested</span>
			</Button>
		</div>
	);
}
