import * as zod from 'zod';

export const CreateEventFormSchema = zod.object({
	name: zod.string().nonempty(),
	location: zod.string().nonempty(),
	date: zod.date({
		required_error: 'Please select a date and time',
		invalid_type_error: "That's not a date!",
	}),
	description: zod.string().min(5),
});
