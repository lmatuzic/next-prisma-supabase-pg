import { prisma } from '@/app/lib/prisma/prisma';
import { EventsPrismaResponse } from '../types/UserEvent';
import { revalidatePath } from 'next/cache';

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

	revalidatePath('/events');
};
