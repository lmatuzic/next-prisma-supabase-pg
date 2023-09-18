import { Separator } from '../(ui)/components/shadcn/Separator';
import { getAllEvents } from './actions/getAllEvents';
import CreateEventDialog from './components/CreateEventDialog';
import EventsList from './components/EventsList';

export const revalidate = 1;

export default async function EventsPage() {
	const events = await getAllEvents();

	console.log(events);

	return (
		<>
			<header className='flex items-center justify-between pb-4'>
				<h1 className='text-2xl'>Events</h1>
				<CreateEventDialog />
			</header>

			<Separator />
			<EventsList events={events} />
		</>
	);
}
