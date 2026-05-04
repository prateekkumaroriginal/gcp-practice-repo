import { prisma } from "@gcp-turborepo/prisma/client";

export default async function Home() {
  // const user = await prisma.user.findFirst();
  return (
    <div>
      {/* <p>{user?.email}</p>
      <p>{user?.password}</p> */}
    </div>
  )
}
