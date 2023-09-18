import { Button } from '@/app/(ui)/components/shadcn/Button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/app/(ui)/components/shadcn/Card';
import { EVENTS_PAGE } from '@/app/constants/routes';
import { CalendarDays, MapPin, User2 } from 'lucide-react';
import Link from 'next/link';
import { updateEventGoings } from '../actions/updateEventGoings';
import { updateEventInterests } from '../actions/updateEventInterests';
import { EventsPrismaResponse } from '../types/UserEvent';
import EventActions from './EventActions';

interface EventProps {
	event: EventsPrismaResponse;
}

export default function EventCard({ event }: EventProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle className='text-2xl'>{event.name}</CardTitle>

				<EventActions
					event={event}
					updateEventGoings={updateEventGoings}
					updateEventInterests={updateEventInterests}
				/>
			</CardHeader>

			<CardContent>
				<div className='flex items-center mb-4'>
					<CalendarDays className='mr-2' />
					<span>{event.date.toLocaleDateString()}</span>
				</div>

				<div className='flex items-center mb-4'>
					<MapPin className='mr-2' />
					<span>{event.location}</span>
				</div>

				<div className='flex items-center'>
					<User2 className='mr-2' />
					<span>{event.creatorUsername}</span>
				</div>

				<div className='mt-8'>
					<div className='mb-1 text-base font-semibold'>About</div>
					<CardDescription>{event.description}</CardDescription>
				</div>

				<div className='mt-6'>
					<div>
						<span>Going: </span>
						<span>{event.peopleGoing}</span>
					</div>

					<div>
						<span>Interested: </span>
						<span>{event.peopleInterested}</span>
					</div>
				</div>
			</CardContent>

			<CardFooter className='flex-col items-start text-sm '>
				<Link href={`${EVENTS_PAGE}/${event.id}`} className='w-full mt-6'>
					<Button className='w-full'>See more</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
