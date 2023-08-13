import { prisma } from '@/app/lib/prisma/prisma';

export const getEvent = async (id: number) => {
	return await prisma.event.findUnique({
		where: { id },
	});
};
