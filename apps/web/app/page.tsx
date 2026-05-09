import { prisma } from "@gcp-turborepo/prisma/client";

export default async function Home() {
  console.log("DB URL:", process.env.DATABASE_URL);
  // const user = await prisma.user.findFirst();
  return (
    <div>
      <h1>Welcome</h1>
      {/* <p>{user?.email}</p>
      <p>{user?.password}</p> */}
    </div>
  )
}
