'use client';

import { cn } from '@/app/lib/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { useState } from 'react';
import { Button } from '../shadcn/Button';
import { Calendar } from '../shadcn/Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../shadcn/Popover';

export function DatePicker() {
	const today = new Date();
	const [date, setDate] = useState<Date>(today);

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'w-full justify-start text-left font-normal',
						!date && 'text-muted-foreground'
					)}
				>
					<CalendarIcon className='w-4 h-4 mr-2' />
					{date ? format(date, 'PPP') : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>

			<PopoverContent className='w-auto p-0' align='start'>
				<Calendar mode='single' selected={date} onSelect={setDate} initialFocus />
			</PopoverContent>
		</Popover>
	);
}
