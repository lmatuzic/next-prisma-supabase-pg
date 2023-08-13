import CreateEventDialog from './components/CreateEventDialog';

export default function EventsPage() {
	return (
		<main className='container'>
			<header className='flex items-center justify-between'>
				<h1>Events</h1>
				<CreateEventDialog />
			</header>
		</main>
	);
}
