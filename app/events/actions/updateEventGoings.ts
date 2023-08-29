import { prisma } from '@/app/lib/prisma/prisma';
import { EventsPrismaResponse } from '../types/UserEvent';
import { User } from '@clerk/nextjs/server';

export const updateEventGoings = async (event: EventsPrismaResponse, user: User | null) => {
	'use server';

	if (!user) {
		throw new Error('User does not exist!');
	}

	await prisma.event.update({
		where: {
			id: event.id,
		},
		data: {
			peopleGoing: {
				increment: 1,
			},
		},
	});
};
