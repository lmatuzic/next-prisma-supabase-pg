import { prisma } from '@/app/lib/prisma/prisma';
import { UserEvent } from '../types/UserEvent';

export const createEvent = async (userEvent: UserEvent) => {
	'use server';

	await prisma.event.create({
		data: {
			name: userEvent.name,
			location: userEvent.location,
			date: userEvent.date,
			description: userEvent.description,
		},
	});
};
