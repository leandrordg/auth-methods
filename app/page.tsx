import { Welcome } from "@/components/welcome";

export default async function Home() {
  return (
    <div className="flex flex-col min-h-dvh gap-6 p-6 ">
      <h1>Home Page</h1>

      <Welcome />
    </div>
  );
}
