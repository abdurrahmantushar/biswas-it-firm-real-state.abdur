import { Building2, KeyRound, MapPin, Ruler } from "lucide-react";
import { Reveal } from "../animations/Reveal";

export const ProjectStates = () => {
  const stats = [
    {
      icon: Building2,
      value: "120+",
      title: "Premium Apartments",
    },
    {
      icon: Ruler,
      value: "1,200 - 2,200",
      title: "Sq. Ft. Apartment Sizes",
    },
    {
      icon: KeyRound,
      value: "3 & 4",
      title: "Bedroom Options",
    },
    {
      icon: MapPin,
      value: "2.5 Acres",
      title: "Total Project Area",
    },
  ];

  return (
    <section  className="relative z-10 -mt-6 bg-[#f7f5ef] px-4 sm:-mt-10 sm:px-8 lg:-mt-20 lg:px-10">
      <div className="container-size grid grid-cols-2 overflow-hidden rounded-xl bg-white shadow-lg md:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <Reveal key={stat.title} delay={index * 0.1}>
              <div className="flex h-full flex-col items-center justify-center gap-2 border-b border-slate-100 px-3 py-5 text-center odd:border-r md:flex-row md:items-center md:justify-start md:gap-3 md:border-b-0 md:border-r md:px-5 md:py-5 md:text-left last:border-r-0">
                
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f5f1df] sm:h-14 sm:w-14 lg:h-20 lg:w-20">
                  <Icon
                    size={22}
                    strokeWidth={2}
                    className="text-[#b59632] sm:size-7 lg:size-10"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[#17202b] sm:text-xl lg:text-2xl">
                    {stat.value}
                  </h3>

                  <p className="mt-0.5 text-[10px] font-medium leading-4 text-slate-500 sm:text-xs lg:text-[14px]">
                    {stat.title}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};