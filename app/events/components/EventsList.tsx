import { EventsPrismaResponse } from '../types/UserEvent';
import EventCard from './EventCard';

interface EventsListProps {
	events: EventsPrismaResponse[];
}

export default function EventsList({ events }: EventsListProps) {
	return (
		<div className='grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-4'>
			{events.map((event) => (
				<EventCard event={event} key={event.id} />
			))}
		</div>
	);
}
