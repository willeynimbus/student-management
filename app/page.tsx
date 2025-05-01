import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({
  weight: "700",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-screen fixed gap-4">
      <div>
        <h1 className={`${caveat.className} text-8xl font-bold`}>
          Student Management
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Button
          className=" bg-lime-600 hover:bg-lime-700 hover:cursor-pointer text-2xl"
          size={"lg"}
          asChild
        >
          <Link href="/dashboard">
            Get Started <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
