'use client';

import { useEffect } from 'react';
import { EventsPrismaResponse, UserEvent } from '../types/UserEvent';

interface EventsListProps {
	events: EventsPrismaResponse;
}

export default function EventsList({ events }: EventsListProps) {
	return (
		<div>
			{events.map((event) => (
				<div key={event.id}>
					<h2>{event.name}</h2>
					<div>{event.location}</div>
				</div>
			))}
		</div>
	);
}
