import { auth } from "@/auth";

import { LogInIcon } from "lucide-react";

import { SignInForm } from "@/components/sign-in-form";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { UserMenu } from "@/components/user-menu";

export async function AuthModal() {
  const session = await auth();

  if (session) {
    return <UserMenu />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          Conectar
          <LogInIcon className="size-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <SignInForm />
      </DialogContent>
    </Dialog>
  );
}
