import { Orbitron } from "next/font/google";

const orbitron = Orbitron({
  weight: "700",
  subsets: ["latin"],
});

function Dashboard() {
  return (
    <section className="relative w-full h-full flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Student.png')] bg-contain bg-center bg-no-repeat opacity-60 z-0" />
      <div className="flex justify-center items-center text-black text-3xl font-bold z-10">
        <h1
          className={`${orbitron.className} text-6xl text-center bg-gradient-to-t from-orange-700 to-orange-300 bg-clip-text text-transparent`}
        >
          Welcome to Student Management Dashboard
        </h1>
      </div>
    </section>
  );
}

export default Dashboard;
