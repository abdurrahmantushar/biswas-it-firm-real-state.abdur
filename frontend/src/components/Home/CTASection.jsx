
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const CTA = () => {
  return (
    <section className="bg-[#f7f5ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="container-size">
        <Reveal direction="up">
          <div className="relative overflow-hidden rounded-2xl bg-[#f7f5ef] px-6 py-12 text-center  sm:px-10 sm:py-16 lg:px-20">
            
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/5" />
            <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-white/5" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <Reveal delay={0.1}>
                <div className="mb-4 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#a18d24]">
                  <Sparkles size={15} />
                  Your Dream Home Awaits
                </div>
              </Reveal>

              <HeadingAnimation>
                <h2 className="font-serif text-3xl font-bold leading-tight text-gray-500 sm:text-4xl lg:text-5xl">
                  Ready to Find Your{" "}
                  <span className="text-[#b9a955]">Dream Home?</span>
                </h2>
              </HeadingAnimation>

              <Reveal delay={0.2}>
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-800/75 sm:text-base sm:leading-7">
                  Take the first step toward a better lifestyle. Book a site
                  visit today and explore your future home with our property
                  consultant.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <a
                    href="#lead-form"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d8c878] px-6 py-3 text-xl font-bold text-[#1d2a64] transition duration-300 hover:bg-[#e4d58e] sm:w-auto"
                  >
                    Book a Site Visit

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#17202b]/30 transition duration-300 group-hover:border-[#17202b]">
                      <ArrowRight
                        size={19}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                      />
                    </span>
                  </a>

                  <a
                    href="#lead-form"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gray-600/30 px-6 py-3 
                    text-xl font-semibold text-gray-700 transition duration-300 hover:border-white hover:bg-gray-700/10 sm:w-auto"
                  >
                    <Phone size={19} className="mt-1" />
                    Request a Callback
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="mt-5 text-[11px] font-medium text-gray-600/55">
                  No commitment required • Get project details & availability
                </p>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};