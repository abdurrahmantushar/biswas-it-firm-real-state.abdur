import {
  CarFront,
  Dumbbell,
  Flower2,
  House,
  LockKeyhole,
  ShieldCheck,
  Waves,
  Zap,
} from "lucide-react";

import AmeinitiesImage from "../../assets/AminitiesSection/AmenitiesImage.jpg";
import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const Amenities = () => {
  const amenities = [
    {
      icon: Waves,
      title: "Swimming Pool",
    },
    {
      icon: Dumbbell,
      title: "Gym & Fitness",
    },
    {
      icon: House,
      title: "Kids Play Area",
    },
    {
      icon: Flower2,
      title: "Rooftop Garden",
    },
    {
      icon: House,
      title: "Community Hall",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Security",
    },
    {
      icon: Zap,
      title: "Power Backup",
    },
    {
      icon: CarFront,
      title: "Covered Parking",
    },
  ];

  return (
    <section id="amenities" className="bg-[#f7f5ef] px-5 py-20 sm:px-8 lg:px-10">
      <div className="container-size">
        <div className="grid items-center gap-10 lg:grid-cols-[1.55fr_0.85fr] lg:gap-14">
          
          <div>
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
                Amenities
              </span>
            </Reveal>

            <HeadingAnimation>
              <h2 className="mt-3 max-w-[420px] font-serif text-4xl font-bold leading-tight text-[#17202b] sm:text-3xl">
                Premium Amenities
                <span className="block text-[#315f2a]">
                  for a Better Life
                </span>
              </h2>
            </HeadingAnimation>

            <div className="mt-8 grid grid-cols-2 gap-x-5 gap-y-7 sm:grid-cols-4 lg:grid-cols-8">
              {amenities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.08}>
                    <div className="group flex flex-col items-center text-center sm:items-start sm:text-left">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5f1df] transition duration-300 group-hover:bg-[#234f1e]">
                        <Icon
                          size={31}
                          strokeWidth={1.8}
                          className="text-[#b59632] transition duration-300 group-hover:text-white"
                        />
                      </div>

                      <p className="mt-3 text-x font-semibold text-slate-600 transition duration-300 group-hover:text-[#234f1e]">
                        {item.title}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal direction="right">
            <div className="h-[300px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[330px]">
              <img
                src={AmeinitiesImage}
                alt="Premium rooftop amenities"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};