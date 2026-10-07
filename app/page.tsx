import Image from "next/image";
import Counter from "@/components/Counter";
import TemperatureCard from "@/components/TemperatureCard";
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Counter/>
      <div className="h-4"></div>
      <TemperatureCard title="Temperature Converter" />
    </div>
  );
}
