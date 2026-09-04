
import {ArrowRight,CalendarDays,ChartNoAxesCombined,MapPin,Tag} from "lucide-react";

import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const Investment = () => {
  const benefits = [
    {
      icon: Tag,
      label: "Starting From",
      value: "৳52 Lakh",
      description: "Competitive pricing for premium living",
    },
    {
      icon: CalendarDays,
      label: "Flexible",
      value: "Payment Plan",
      description: "Easy and flexible payment options to suit you",
    },
    {
      icon: MapPin,
      label: "Prime",
      value: "Location",
      description: "Located in the heart of the city with great connectivity",
    },
    {
      icon: ChartNoAxesCombined,
      label: "High",
      value: "Future Value",
      description: "A valuable investment with high appreciation potential",
    },
  ];

  return (
    <section 
    id="investments"
    className="bg-[#f7f5ef]  py-12 sm:px-8 sm:py-16 lg:px-0">
      <div className="container-size">
        <div className="relative overflow-hidden rounded-2xl border border-[#d8c878]/70 bg-[#f7f5ef]">
          
          <div className="grid lg:grid-cols-[460px_1fr]">
            
            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <Reveal direction="left">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
                  Invest In Your Future
                </span>
              </Reveal>

              <HeadingAnimation>
                <h2 className="mt-4 font-serif text-3xl font-bold leading-[1.1] text-[#17202b] sm:text-4xl lg:text-[42px]">
                  A Smart Investment
                  <span className="block">
                    for Your Future
                  </span>
                </h2>
              </HeadingAnimation>

              <Reveal delay={0.15}>
                <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                  Abdur's Heights offers premium living spaces with great
                  value and high potential returns in one of the city's most
                  desirable locations.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href="#lead-form"
                    className="group inline-flex items-center justify-center gap-2 rounded-md bg-[#d8c878] px-5 py-3 text-x font-bold text-[#263238] transition duration-300 hover:bg-[#dbc036]"
                  >
                    Get Pricing Details

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#lead-form"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-[#315f2a] bg-white px-5 py-3 text-sm font-bold text-[#315f2a] transition duration-300 hover:bg-[#dbc036] hover:text-[#315f2a]"
                  >
                    <CalendarDays size={16} />
                    Schedule a Consultation
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="relative p-5 sm:p-7 lg:p-8">

              <div className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 mb-20 lg:mb-0 sm:mb-0">
                {benefits.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Reveal
                      key={item.value}
                      direction="up"
                      delay={index * 0.1}
                    >
                      <div className="group flex h-full min-h-[230px] mt-18 flex-col items-center rounded-xl border border-slate-200 bg-white/90 p-5 text-center shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                        
                        <div className="flex h-15 w-15 items-center justify-center rounded-full bg-[#f5f1df] text-[#b59632] transition duration-300 group-hover:scale-105">
                          <Icon size={28} />
                        </div>

                        <p className="mt-5 text-xs font-bold text-[#315f2a]">
                          {item.label}
                        </p>

                        <h3 className="mt-1 font-serif text-xl font-bold leading-tight text-[#17202b]">
                          {item.value}
                        </h3>

                        <div className="my-4 h-px w-10 bg-[#d8c878]" />

                        <p className="text-xs leading-5 text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};