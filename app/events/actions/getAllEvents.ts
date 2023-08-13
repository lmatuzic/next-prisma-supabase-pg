import { prisma } from '@/app/lib/prisma/prisma';

export const getAllEvents = async () => {
	return await prisma.event.findMany();
};
