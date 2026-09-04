import client1 from "../../assets/Testimonials/client1.jpg";
import client2 from "../../assets/Testimonials/client2.jpg";
import client3 from "../../assets/Testimonials/client3.jpg";
import client4 from "../../assets/Testimonials/client4.jpg";
import client5 from "../../assets/Testimonials/client5.jpg";
import client6 from "../../assets/Testimonials/client6.jpg";
import client7 from "../../assets/Testimonials/client7.jpg";
import client8 from "../../assets/Testimonials/client8.jpg";

import { Reveal, HeadingAnimation } from "../animations/Reveal";
import { TestimonialSlider } from "../animations/TestimonealSlider";

export const Testimonials = () => {
  const testimonials = [
    {
      image: client1,
      name: "James Wilson",
      role: "Home Buyer",
      review:
        "The entire buying experience was smooth and professional. The team was very helpful throughout the process.",
    },
    {
      image: client2,
      name: "Sarah Miller",
      role: "Apartment Owner",
      review:
        "I really liked the location and the overall quality of the project. Everything was explained clearly.",
    },
    {
      image: client3,
      name: "David Anderson",
      role: "Business Owner",
      review:
        "A great residential project with modern facilities and a peaceful environment for families.",
    },
    {
      image: client4,
      name: "Emily Johnson",
      role: "Home Buyer",
      review:
        "The apartment design is beautiful and the team made the whole process very easy for us.",
    },
    {
      image: client5,
      name: "Michael Brown",
      role: "Apartment Owner",
      review:
        "The amenities and security system were the main reasons I chose this project.",
    },
    {
      image: client6,
      name: "Olivia Davis",
      role: "Home Buyer",
      review:
        "Very happy with the overall experience. The project has everything a modern family needs.",
    },
    {
      image: client7,
      name: "Daniel Smith",
      role: "Apartment Owner",
      review:
        "Professional service, great communication and a beautiful living environment.",
    },
    {
      image: client8,
      name: "Sophia Taylor",
      role: "Home Buyer",
      review:
        "The team was friendly and supportive from the first visit until the final decision.",
    },
  ];

  return (
    <section id="testimonials" className="bg-[#f8f7f2] px-5 py-20 sm:px-8 lg:px-10">
      <div className="container-size">

        <div className="text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
              Testimonials
            </span>
          </Reveal>

          <HeadingAnimation>
            <h2 className="mt-3 font-serif text-4xl font-bold text-[#17202b] sm:text-5xl">
              What Our Clients Say
            </h2>
          </HeadingAnimation>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Hear from people who have already chosen our project as their
              place to call home.
            </p>
          </Reveal>
        </div>

        <div className="mt-12">
          <TestimonialSlider testimonials={testimonials} />
        </div>

      </div>
    </section>
  );
};