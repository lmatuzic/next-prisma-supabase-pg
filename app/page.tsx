import { TestForm } from './components/TestForm';
import { prisma } from './lib/prisma/prisma';

export default async function Home() {
	const user = await prisma.user.findFirst({
		where: { email: 'test@test.com' },
	});

	const post = await prisma.post.findFirst({
		where: { id: 11 },
	});

	const createCategory = async (name: string) => {
		'use server';

		await prisma.category.create({
			data: {
				name,
			},
		});
	};

	return (
		<main className='grid p-24 place-items-center'>
			<h1>Homepage</h1>

			<div className='mt-12'>
				<h1>Users</h1>
				{user?.name}
			</div>

			<div className='mt-12'>
				<h1>Posts</h1>
				{user?.name}
			</div>

			<TestForm createCategory={createCategory} />
		</main>
	);
}
