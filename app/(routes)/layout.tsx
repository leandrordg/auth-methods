import { Navbar } from "./_components/navbar";

type Props = {
  children: React.ReactNode;
};

export default function RoutesLayout({ children }: Props) {
  return (
    <div className="h-full">
      <div className="h-[64px] border-b border-input fixed top-0 w-full inset-y-0 z-50">
        <Navbar />
      </div>
      <main className="h-full pt-[64px]">{children}</main>
    </div>
  );
}
