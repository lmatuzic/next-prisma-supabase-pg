'use client';

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
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const FormSchema = z.object({
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
		<FormContextProvider {...form}>
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
		</FormContextProvider>
	);
}
