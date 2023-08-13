'use client';

import { DatePicker } from '@/app/(ui)/components/date/DatePicker';
import { Button } from '@/app/(ui)/components/shadcn/Button';
import {
	FormContextProvider,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/(ui)/components/shadcn/Form';
import { Input } from '@/app/(ui)/components/shadcn/Input';
import { Textarea } from '@/app/(ui)/components/shadcn/Textarea';
import { CreateEventFormSchema } from '@/app/lib/zod/schemas/CreateEventFormSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as zod from 'zod';
import { UserEvent } from '../types/UserEvent';

interface CreateEventFormProps {
	createEvent: (userEvent: UserEvent) => Promise<void>;
}

export default function CreateEventForm({ createEvent }: CreateEventFormProps) {
	const form = useForm<zod.infer<typeof CreateEventFormSchema>>({
		resolver: zodResolver(CreateEventFormSchema),
		defaultValues: {
			name: '',
			location: '',
			date: new Date(),
			description: '',
		},
	});

	async function handleCreateEvent(data: UserEvent) {
		await createEvent({
			name: data.name,
			location: data.location,
			date: data.date,
			description: data.description,
		});
	}

	return (
		<FormContextProvider {...form}>
			<form onSubmit={form.handleSubmit(handleCreateEvent)} className='w-full space-y-6'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>

							<FormControl>
								<Input placeholder='Enter name' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='location'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Location</FormLabel>

							<FormControl>
								<Input placeholder='Enter location' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='date'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Date</FormLabel>

							<FormControl>
								<DatePicker />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='description'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Description</FormLabel>

							<FormControl>
								<Textarea className='resize-none' {...field} />
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit' className='w-full'>
					Create
				</Button>
			</form>
		</FormContextProvider>
	);
}
