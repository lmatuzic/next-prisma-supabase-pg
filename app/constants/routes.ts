type Route = {
	path: string;
	name: string;
};

export const HOME_PAGE = '/';
export const EVENTS_PAGE = '/events';

export const routes: Route[] = [
	{
		path: HOME_PAGE,
		name: 'Home',
	},
	{
		path: EVENTS_PAGE,
		name: 'Events',
	},
];
