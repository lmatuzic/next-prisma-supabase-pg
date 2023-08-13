import { Button } from '@/app/components/shadcn/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/app/components/shadcn/Dialog';
import { Separator } from '@/app/components/shadcn/Separator';
import CreateEventForm from './CreateEventForm';

export default function CreateEventDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outline'>Create event</Button>
			</DialogTrigger>

			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle className='mb-4'>Create event</DialogTitle>

					<DialogDescription>
						Welcome to event creation wizard! <br />
						Fill in the blanks below to kickstart your event.
					</DialogDescription>
				</DialogHeader>

				<Separator />

				<CreateEventForm />
			</DialogContent>
		</Dialog>
	);
}
