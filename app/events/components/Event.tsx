import Link from 'next/link';
import React from 'react';
import { EventsPrismaResponse } from '../types/UserEvent';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/app/(ui)/components/shadcn/Card';

interface EventProps {
	event: EventsPrismaResponse;
}

export default function Event({ event }: EventProps) {
	return (
		<Link href={`/events/${event.id}`}>
			<Card>
				<CardHeader>
					<CardTitle>{event.name}</CardTitle>
					<CardDescription>{event.date.toLocaleDateString()}</CardDescription>
				</CardHeader>

				<CardContent>
					<p>{event.description}</p>
				</CardContent>
			</Card>
		</Link>
	);
}
