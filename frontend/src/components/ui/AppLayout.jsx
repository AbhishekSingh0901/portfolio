import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar";

import { GiDiamondsSmile } from "react-icons/gi";

function AppLayout() {
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
        });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden" ref={comp}>
      <div id="content">
        <Navbar />
        <Outlet />
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

export default AppLayout;
