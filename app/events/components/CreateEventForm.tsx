'use client';

import { DatePicker } from '@/app/components/date/DatePicker';
import { Button } from '@/app/components/shadcn/Button';
import {
	FormContextProvider,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/components/shadcn/Form';
import { Input } from '@/app/components/shadcn/Input';
import { Textarea } from '@/app/components/shadcn/Textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const CreateEventFormSchema = z.object({
	name: z.string().min(2),
	location: z.string(),
	description: z.string().min(20),
	date: z.date(),
});

export default function CreateEventForm() {
	const form = useForm<z.infer<typeof CreateEventFormSchema>>({
		resolver: zodResolver(CreateEventFormSchema),
		defaultValues: {
			name: '',
			description: '',
			date: new Date(),
		},
	});

	return (
		<FormContextProvider {...form}>
			<form onSubmit={form.handleSubmit(() => console.log('test'))} className='w-full space-y-6'>
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
