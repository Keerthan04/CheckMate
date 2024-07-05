import { signInAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CheckMate</h1>
      <form action={signInAction}>
        <Button>Log in</Button>
      </form>

    </main>
  );
}
