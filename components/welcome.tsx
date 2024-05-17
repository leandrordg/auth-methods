import Image from "next/image";

import { SignIn } from "@/components/sign-in";
import { auth } from "@/auth";
import { SignOut } from "./sign-out";

export async function Welcome() {
  const session = await auth();

  if (!session?.user) return <SignIn />;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Image
          src={session.user.image!}
          alt={session.user.name!}
          width={32}
          height={32}
          className="rounded-full"
        />
        <h1>Bem vindo, {session.user.name}!</h1>
      </div>

      <SignOut />
    </section>
  );
}
