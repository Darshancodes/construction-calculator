import { MultiStep } from "@/components/calculator/multi-step";
import { Header } from "@/components/layout/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full md:max-w-6xl  mx-auto">
      <Header />
      <MultiStep />
    </div>
  );
}
