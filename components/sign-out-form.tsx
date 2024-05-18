import { signOut } from "@/auth";

import { LogOutIcon } from "lucide-react";

export function SignOutForm() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="flex items-center justify-between w-full cursor-auto">
        Desconectar
        <LogOutIcon className="size-4 ml-2 text-muted-foreground" />
      </button>
    </form>
  );
}
