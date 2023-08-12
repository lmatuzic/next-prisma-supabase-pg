'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { prisma } from '../lib/prisma/prisma';

import { Button } from '@/app/components/shadcn/button';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/app/components/shadcn/form';
import { Input } from '@/app/components/shadcn/input';

const FormSchema = z.object({
	// email: z.string().email({ message: "Invalid email address" }),
	// password: z.string().min(4),
	// name: z.string().min(2),
	name: z.string().min(2),
});

interface TestFormProps {
	createCategory: (name: string) => Promise<void>;
}

export function TestForm({ createCategory }: TestFormProps) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: '',
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		await createCategory(data.name);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='w-2/3 space-y-6'>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>

							<FormControl>
								<Input placeholder='Enter category' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type='submit'>Submit</Button>
			</form>
		</Form>
	);
}
