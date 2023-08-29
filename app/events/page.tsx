import { getAllEvents } from './actions/getAllEvents';
import CreateEventDialog from './components/CreateEventDialog';
import EventsList from './components/EventsList';

export const revalidate = 1;

export default async function EventsPage() {
	const events = await getAllEvents();

	return (
		<main className='container'>
			<header className='flex items-center justify-between'>
				<h1 className='text-2xl'>Events</h1>
				<CreateEventDialog />
			</header>

			<EventsList events={events} />
		</main>
	);
}
