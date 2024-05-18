import { auth } from "@/auth";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

export async function Welcome() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <section className="flex items-center gap-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={session.user.image!} alt={session.user.name!} />
        <AvatarFallback>
          <Skeleton className="size-8 rounded-full" />
        </AvatarFallback>
      </Avatar>

      <div>
        <h1>{session.user.name}</h1>
        <p className="text-xs text-muted-foreground">{session.user.email}</p>
      </div>
    </section>
  );
}
