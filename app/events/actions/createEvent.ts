import { prisma } from '@/app/lib/prisma/prisma';
import { UserEvent } from '../types/UserEvent';
import { User } from '@clerk/nextjs/server';

export const createEvent = async (userEvent: UserEvent, user: User | null) => {
	'use server';

	if (!user) {
		throw new Error('User does not exist!');
	}

	await prisma.event.create({
		data: {
			name: userEvent.name,
			location: userEvent.location,
			date: userEvent.date,
			description: userEvent.description,
			creatorEmail: user.emailAddresses[0].emailAddress,
			creatorUsername: `${user.firstName} ${user.lastName}`,
		},
	});
};
