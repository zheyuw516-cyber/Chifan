import Navigation from "@/components/navigation";
import ThoughtMap from "@/components/LifeTree";

export default function LifePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-[#0D1F14]">
      <Navigation />

      <ThoughtMap />
    </main>
  );
}