import { currentUser } from "@clerk/nextjs/server";

export default async function Page() {
  const user = await currentUser();

  if (!user) {
    return <h1>Unauthorized</h1>;
  }

  return (
    <>
      <h1>Profile</h1>
      <div>Hello {user?.firstName}</div>
    </>
  );
}
