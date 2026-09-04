
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of apartments are available?",
      answer:
        "We offer 2-bedroom, 3-bedroom and premium apartment options with different sizes and layouts to match different family needs.",
    },
    {
      question: "Where is the project located?",
      answer:
        "The project is located in a prime and convenient area with easy access to schools, shopping centers, transportation and other important facilities.",
    },
    {
      question: "Can I schedule a site visit?",
      answer:
        "Yes. You can submit the lead form and request a site visit. Our property consultant will contact you to confirm a suitable time.",
    },
    {
      question: "What amenities are available?",
      answer:
        "The project includes modern amenities such as swimming pool, gym, kids play area, rooftop garden, community hall, security and covered parking.",
    },
    {
      question: "How can I get pricing details?",
      answer:
        "You can select your preferred apartment type from the form and request a callback. Our team will provide the latest pricing and availability details.",
    },
    {
      question: "How can I contact the sales team?",
      answer:
        "Simply fill out the contact form with your name, phone number and email address. Our team will get in touch with you shortly.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-[#f7f5ef] px-5  sm:px-8 lg:px-10">
      <div className="container-size">

        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
              FAQ
            </span>
          </Reveal>

          <HeadingAnimation>
            <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#17202b] sm:text-2xl">
              Frequently Asked
              <span className="text-[#315f2a]"> Questions</span>
            </h2>
          </HeadingAnimation>

          <Reveal delay={0.15}>
            <p className="mt-2 text-sm leading-6 text-slate-500 sm:text-base">
              Find answers to some of the most common questions about our
              residential project.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-5 max-w-3xl space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <Reveal key={faq.question} delay={index * 0.06}>
                <div
                  className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-[#315f2a] shadow-sm"
                      : "border-slate-200"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
                  >
                    <span
                      className={`text-sm font-bold transition-colors duration-300 sm:text-[14px] ${
                        isOpen
                          ? "text-[#315f2a]"
                          : "text-[#2a5d9b]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#234f1e] text-white"
                          : "bg-[#f5f1df] text-[#315f2a]"
                      }`}
                    >
                      <ChevronDown size={17} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-6 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
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