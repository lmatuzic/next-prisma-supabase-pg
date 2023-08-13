import { getAllEvents } from './actions/getAllEvents';
import CreateEventDialog from './components/CreateEventDialog';
import EventsList from './components/EventsList';

export default async function EventsPage() {
	const events = await getAllEvents();

	return (
		<main className='container'>
			<header className='flex items-center justify-between'>
				<h1>Events</h1>
				<CreateEventDialog />
			</header>

			<EventsList events={events} />
		</main>
	);
}