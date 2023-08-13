export type UserEvent = {
	name: string;
	location: string;
	date: Date;
	description: string;
};

export type EventsPrismaResponse = {
	id: number;
	name: string;
	location: string;
	date: Date;
	description: string;
};
