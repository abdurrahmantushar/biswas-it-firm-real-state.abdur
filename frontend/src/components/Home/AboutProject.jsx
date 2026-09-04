
import { ArrowRight } from "lucide-react";

import About1 from "../../assets/AboutSection/About1.jpg";
import About2 from "../../assets/AboutSection/About2.jpg";
import About3 from "../../assets/AboutSection/About3.jpg";
import About4 from "../../assets/AboutSection/About4.jpg";
import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const AboutProject = () => {
  return (
    <section
      id="project"
      className="bg-[#f8f7f2] px-5 py-14 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="container-size grid items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <Reveal direction="left" className="col-span-2 lg:col-span-3">
            <div className="h-[260px] overflow-hidden rounded-xl sm:h-[380px] sm:rounded-2xl lg:h-[450px]">
              <img
                src={About1}
                alt="Premium apartment exterior"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-[130px] overflow-hidden rounded-xl sm:h-[210px] sm:rounded-2xl">
              <img
                src={About2}
                alt="Modern apartment interior"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="h-[130px] overflow-hidden rounded-xl sm:h-[210px] sm:rounded-2xl">
              <img
                src={About3}
                alt="Premium residential living space"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="col-span-2 h-[150px] overflow-hidden rounded-xl sm:h-[210px] sm:rounded-2xl lg:col-span-1">
              <img
                src={About4}
                alt="Premium residential living space"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <div className="max-w-xl">
          <Reveal>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#315f2a] sm:text-xs">
              About The Project
            </span>
          </Reveal>

          <HeadingAnimation>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#17202b] sm:mt-4 sm:text-5xl">
              A Better Way to{" "}
              <span className="text-[#315f2a]">Live & Grow</span>
            </h2>
          </HeadingAnimation>

          <Reveal delay={0.15}>
            <p className="mt-5 text-sm font-medium leading-6 text-slate-600 sm:mt-6 sm:text-base sm:leading-7">
              Designed for modern families, this residential project combines
              thoughtful architecture, comfortable living spaces and a
              convenient location to create a lifestyle you can truly enjoy.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-4 text-sm font-medium leading-6 text-slate-600 sm:leading-7">
              Every detail has been carefully planned to provide a peaceful,
              secure and premium living experience for you and your family.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#d8c878] px-5 py-3 text-sm font-semibold text-[#263238] transition duration-300 hover:bg-[#dbc036] sm:px-6"
              >
                Book a Site Visit
                <ArrowRight size={16} />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-[#234f1e] hover:text-[#234f1e] sm:px-6"
              >
                Explore Gallery
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};