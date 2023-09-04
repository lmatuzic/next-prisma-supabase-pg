import { EVENTS_PAGE } from '@/app/constants/routePaths';
import { prisma } from '@/app/lib/prisma/prisma';
import { revalidatePath } from 'next/cache';
import { EventsPrismaResponse } from '../types/UserEvent';

export const updateEventGoings = async (event: EventsPrismaResponse) => {
	'use server';

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

	revalidatePath(EVENTS_PAGE);
};
