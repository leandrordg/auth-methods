import { AuthModal } from "@/components/modals/auth-modal";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="flex items-center gap-6 h-full px-6">
      <Link href="/" className="text-lg tracking-tighter">
        Início
      </Link>

      <div className="ml-auto flex items-center gap-6">
        <AuthModal />
      </div>
    </header>
  );
}
