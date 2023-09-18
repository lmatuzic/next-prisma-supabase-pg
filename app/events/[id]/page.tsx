import { EVENTS_PAGE } from '@/app/constants/routes';
import notFound from '@/app/not-found';
import Link from 'next/link';
import { getEvent } from '../actions/getEvent';

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
		<Link href={`${EVENTS_PAGE}/${targetEvent.id}`}>
			<div>{targetEvent.name}</div>
			<div>{targetEvent.location}</div>
			<div>{targetEvent.description}</div>
			<div>{targetEvent.date.toLocaleDateString()}</div>
		</Link>
	);
}
