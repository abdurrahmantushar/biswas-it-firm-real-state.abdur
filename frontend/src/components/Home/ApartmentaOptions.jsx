import { ArrowRight } from "lucide-react";

import Image1 from "../../assets/AppertmentSection/Image1.jpg";
import Image2 from "../../assets/AppertmentSection/Image2.jpg";
import Image3 from "../../assets/AppertmentSection/Image3.jpg";

import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const ApartmentOptions = () => {
  const apartments = [
    {
      image: Image1,
      title: "2 Bedroom Apartment",
      size: "1,200 Sq. Ft.",
      description: "Perfect for small families",
      price: "$62,000",
    },
    {
      image: Image2,
      title: "3 Bedroom Apartment",
      size: "1,600 Sq. Ft.",
      description: "Ideal for growing families",
      price: "$78,000",
    },
    {
      image: Image3,
      title: "Premium Apartment",
      size: "2,200 Sq. Ft.",
      description: "Luxury living at its best",
      price: "$98,000",
    },
  ];

  return (
    <section id="apartments">
      <div className="container-size">
        <Reveal>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
            Apartment Options
          </span>
        </Reveal>

        <HeadingAnimation>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#17202b] sm:text-4xl">
            Find Your Perfect Space
          </h2>
        </HeadingAnimation>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apartments.map((apartment, index) => (
            <Reveal key={apartment.title} delay={index * 0.1}>
              <div className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="h-52 overflow-hidden sm:h-56">
                  <img
                    src={apartment.image}
                    alt={apartment.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-bold text-[#17202b]">
                    {apartment.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-slate-700">
                    {apartment.size}
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    {apartment.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-3">
                    <p className="text-sm font-bold text-[#315f2a]">
                      From <span className="text-lg">{apartment.price}</span>
                    </p>

                    <a
                      href="#lead-form"
                      className="group/btn inline-flex items-center gap-2 rounded-md border border-[#315f2a] px-4 py-2 text-xs font-bold text-[#315f2a] transition duration-300 hover:bg-[#234f1e] hover:text-white"
                    >
                      Get Details
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-300 group-hover/btn:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};