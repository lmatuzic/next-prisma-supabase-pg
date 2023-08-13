import { EventsPrismaResponse } from '../types/UserEvent';
import Event from './Event';

interface EventsListProps {
	events: EventsPrismaResponse[];
}

export default function EventsList({ events }: EventsListProps) {
	return (
		<div className='grid gap-4 mt-12 md:grid-cols-2 lg:grid-cols-4'>
			{events.map((event) => (
				<Event event={event} key={event.id} />
			))}
		</div>
	);
}
