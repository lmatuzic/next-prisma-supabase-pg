import { prisma } from "./lib/prisma";

export default async function Home() {
  const user = await prisma.user.findFirst({
    where: { email: "test@test.com" },
  });

  const post = await prisma.post.findFirst({
    where: { id: 11 },
  });

  return (
    <main className="grid place-items-center p-24">
      <h1>Homepage</h1>

      <div className="mt-12">
        <h1>Users</h1>
        {user?.name}
      </div>

      <div className="mt-12">
        <h1>Posts</h1>
        {user?.name}
      </div>
    </main>
  );
}
