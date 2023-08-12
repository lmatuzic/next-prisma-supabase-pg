export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<main>
			<nav>
				<ul>
					<li>test</li>
				</ul>
			</nav>

			{children}
		</main>
	);
}
