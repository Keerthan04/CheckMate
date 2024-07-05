
import Providers  from "../providers";
import { auth } from "@/auth";//auth shd be used in server

export default async function LoggedInLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const session = await auth();
  return <Providers session={session}>{children}</Providers>;
}
//adding the convex provider once loggedin only