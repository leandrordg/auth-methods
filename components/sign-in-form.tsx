import { signIn } from "@/auth";

import { GithubIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export function SignInForm() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github");
      }}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col">
        <h1 className="font-bold text-lg">Conectar-se</h1>
        <p className="text-muted-foreground text-sm">
          Entre para obter acesso total na rede.
        </p>
      </div>

      <Button type="submit" size="sm" variant="outline">
        <GithubIcon className="size-4 mr-2" />
        Entrar com GitHub
      </Button>
    </form>
  );
}
