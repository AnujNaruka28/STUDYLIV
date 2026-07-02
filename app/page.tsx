import HeroSection from "./components/cores/HomePage/HeroSection";
import Features from "./components/cores/HomePage/Features";
import BecomeInstructor from "./components/cores/HomePage/BecomeInstructor";

export default function Home() {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <HeroSection/>
      <Features/>
      <BecomeInstructor/>
    </div>
  );
}
