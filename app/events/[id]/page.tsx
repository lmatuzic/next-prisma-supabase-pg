import Link from 'next/link';
import { getEvent } from '../actions/getEvent';
import notFound from './not-found';

interface EventDetailsProps {
	params: {
		id: string;
	};
}

export default async function EventPage({ params: { id } }: EventDetailsProps) {
	const targetEvent = await getEvent(Number(id));

	if (!targetEvent) {
		return notFound();
	}

	return (
		<Link href={`/events/${targetEvent.id}`}>
			<div>{targetEvent.name}</div>
			<div>{targetEvent.location}</div>
			<div>{targetEvent.description}</div>
			<div>{targetEvent.date.toLocaleDateString()}</div>
		</Link>
	);
}
