import {Car,CircleDollarSign,Leaf,MapPin,ShieldCheck,Sparkles} from "lucide-react";

import { Reveal, HeadingAnimation } from "../animations/Reveal";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Excellent connectivity & easy access to everything",
    },
    {
      icon: Sparkles,
      title: "Modern Lifestyle",
      description: "World-class amenities for a comfortable life",
    },
    {
      icon: ShieldCheck,
      title: "24/7 Security",
      description: "Advanced security systems for your safety",
    },
    {
      icon: CircleDollarSign,
      title: "Flexible Payment",
      description: "Easy & flexible payment plans for everyone",
    },
    {
      icon: Leaf,
      title: "Green Environment",
      description: "Clean, green & sustainable living environment",
    },
    {
      icon: Car,
      title: "Ample Parking",
      description: "Spacious parking space for residents & guests",
    },
  ];

  return (
    <section className="bg-[#f5f6ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="container-size grid items-center gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
        
        <div>
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
              Why Choose Us
            </span>
          </Reveal>

          <HeadingAnimation>
            <h2 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#17202b] sm:text-4xl">
              The Perfect Home
              <br className="hidden sm:block" /> for Your Family
            </h2>
          </HeadingAnimation>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="group flex min-h-[105px] items-center gap-4 rounded-lg border border-slate-100 bg-white px-5 py-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#f5f1df]">
                    <Icon
                      size={32}
                      className="text-[#b59632] transition duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#263238]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[15px] font-medium leading-5 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};