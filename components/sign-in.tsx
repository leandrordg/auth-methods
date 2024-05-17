import { signIn } from "@/auth";

import { Button } from "@/components/ui/button";

export function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("github", { redirect: true });
      }}
    >
      <Button type="submit" size="sm" variant="outline">
        Entrar com GitHub
      </Button>
    </form>
  );
}
