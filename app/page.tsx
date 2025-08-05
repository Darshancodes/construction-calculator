import { MultiStep } from "@/components/calculator/multi-step";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full md:max-w-6xl  mx-auto">
      <MultiStep />
    </div>
  );
}
