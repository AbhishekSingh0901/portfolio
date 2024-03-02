import { useLayoutEffect, useRef } from "react";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import { GiDiamondsSmile } from "react-icons/gi";
import gsap from "gsap";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import { SparklesCore } from "./components/ui/sparkles";
import { InfiniteMovingCardsDemo } from "./pages/Testimonials";

function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#intro", {
        yPercent: "0",
        duration: 0.3,
      })
        .from("#intro-heading", {
          opacity: 0,
          y: "-=40",
          delay: 0.3,
        })
        .to("#intro-heading", {
          opacity: 0,
          y: "+=40",
          delay: 0.5,
        })
        .to("#intro", {
          yPercent: "100",
          duration: 1.3,
          display: "none",
        })
        .to("#content", {
          display: "block",
          duration: 1.3,
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden" ref={comp}>
      <div
        id="content"
        className="relative  bg-gradient-to-b from-neutral-800 to-neutral-950"
      >
        <div className="w-full fixed z-0 top-0 bottom-0 left-0 right-0 inset-0 h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
        <Navbar />
        <Homepage />
        <Skills />
        <Projects />
        <InfiniteMovingCardsDemo />
      </div>
      <div
        id="intro"
        className="absolute top-0 right-0 bottom-0 left-0 z-50 h-screen bg-neutral-800 text-neutral-400 flex justify-center items-center"
      >
        <h1 id="intro-heading" className="flex gap-10 text-6xl md:text-9xl">
          Hello! <GiDiamondsSmile />
        </h1>
      </div>
    </div>
  );
}

export default App;
