export default function LoginLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <main className='grid place-items-center'>{children}</main>;
}
