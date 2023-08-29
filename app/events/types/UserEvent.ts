import { User } from '@clerk/nextjs/server';

export type UserEvent = {
	name: string;
	location: string;
	date: Date;
	description: string;
	creator: User | null;
};

export type EventsPrismaResponse = {
	id: number;
	name: string;
	location: string;
	date: Date;
	description: string;
	creatorEmail: string;
	creatorUsername: string;
	peopleGoing: number;
	peopleInterested: number;
};
