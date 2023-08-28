import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// const user = await prisma.user.upsert({
	// 	where: { email: 'test@test.com' },
	// 	update: {},
	// 	create: {
	// 		email: 'test@test.com',
	// 		name: 'Test User',
	// 		password: `$2y$12$GBfcgD6XwaMferSOdYGiduw3Awuo95QAPhxFE0oNJ.Ds8qj3pzEZy`,
	// 	},
	// });
	// const post = await prisma.post.upsert({
	// 	where: { id: 11 },
	// 	update: {},
	// 	create: {
	// 		id: 11,
	// 		updatedAt: new Date(),
	// 		title: 'First post, from seed',
	// 		published: false,
	// 		authorId: 1,
	// 	},
	// });
	// console.log({ user });
	// console.log({ post });
}

main()
	.then(() => prisma.$disconnect())
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
