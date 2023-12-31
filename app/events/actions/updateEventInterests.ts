import { prisma } from '@/app/lib/prisma/prisma';
import { EventsPrismaResponse } from '../types/UserEvent';
import { revalidatePath } from 'next/cache';
import { EVENTS_PAGE } from '@/app/constants/routes';

export const updateEventInterests = async (event: EventsPrismaResponse) => {
	'use server';

	await prisma.event.update({
		where: {
			id: event.id,
		},
		data: {
			peopleInterested: {
				increment: 1,
			},
		},
	});

	revalidatePath(EVENTS_PAGE);
};
