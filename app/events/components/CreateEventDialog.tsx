import { Button } from '@/app/(ui)/components/shadcn/Button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/app/(ui)/components/shadcn/Dialog';
import { Separator } from '@/app/(ui)/components/shadcn/Separator';
import { createEvent } from '../actions/createEvent';
import CreateEventForm from './CreateEventForm';
import { currentUser } from '@clerk/nextjs';

export default async function CreateEventDialog() {
	const user = await currentUser();

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

				<CreateEventForm createEvent={createEvent} user={user} />
			</DialogContent>
		</Dialog>
	);
}
