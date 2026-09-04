
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Reveal } from "../animations/Reveal";

export const Footer = () => {
  return (
    <footer className="bg-[#17202b] px-5 pt-14 sm:px-8 lg:px-10">
      <div className="container-size">

        <div className="grid gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">

          <Reveal direction="up">
            <div>
              <a
                href="#home"
                className="font-serif text-2xl font-bold text-white"
              >
                Prime<span className="text-[#d8c878]">Residences</span>
              </a>

              <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
                Discover thoughtfully designed homes that combine modern
                comfort, premium amenities and a convenient location for
                better living.
              </p>

              <a
                href="#lead-form"
                className="group mt-6 inline-flex items-center gap-2 rounded-md bg-[#d8c878] px-5 py-3 text-sm font-bold text-[#17202b] transition duration-300 hover:bg-[#e4d58e]"
              >
                Book a Site Visit

                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#17202b]/30">
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5"
                  />
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <div>
              <h3 className="text-sm font-bold text-white">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3">
                <li>
                  <a
                    href="#home"
                    className="text-sm text-white/60 transition hover:text-[#d8c878]"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#project"
                    className="text-sm text-white/60 transition hover:text-[#d8c878]"
                  >
                    About Project
                  </a>
                </li>

                <li>
                  <a
                    href="#gallery"
                    className="text-sm text-white/60 transition hover:text-[#d8c878]"
                  >
                    Gallery
                  </a>
                </li>

                <li>
                  <a
                    href="#lead-form"
                    className="text-sm text-white/60 transition hover:text-[#d8c878]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.2}>
            <div>
              <h3 className="text-sm font-bold text-white">
                Our Project
              </h3>

              <ul className="mt-5 space-y-3">
                <li className="text-sm text-white/60">
                  Premium Apartments
                </li>

                <li className="text-sm text-white/60">
                  Modern Amenities
                </li>

                <li className="text-sm text-white/60">
                  Prime Location
                </li>

                <li className="text-sm text-white/60">
                  Secure Environment
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.3}>
            <div>
              <h3 className="text-sm font-bold text-white">
                Get In Touch
              </h3>

              <div className="mt-5 space-y-4">

                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    className="mt-0.5 shrink-0 text-[#d8c878]"
                  />

                  <p className="text-sm leading-5 text-white/60">
                    Gulshan Avenue, Dhaka,
                    <br />
                    Bangladesh
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    size={17}
                    className="shrink-0 text-[#d8c878]"
                  />

                  <a
                    href="tel:+8801700000000"
                    className="text-sm text-white/60 transition hover:text-[#d8c878]"
                  >
                    +880 1700 000 000
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    size={17}
                    className="shrink-0 text-[#d8c878]"
                  />

                  <a
                    href="mailto:info@primeresidences.com"
                    className="break-all text-sm text-white/60 transition hover:text-[#d8c878]"
                  >
                    info@primeresidences.com
                  </a>
                </div>

              </div>
            </div>
          </Reveal>

        </div>

        <Reveal direction="up">
          <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">

            <p className="text-xs text-white/40">
              © 2026 Prime Residences. All rights reserved.
            </p>

            <div className="flex justify-center gap-5 sm:justify-end">
              <a
                href="#"
                className="text-xs text-white/40 transition hover:text-[#d8c878]"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="text-xs text-white/40 transition hover:text-[#d8c878]"
              >
                Terms & Conditions
              </a>
            </div>

          </div>
        </Reveal>

      </div>
    </footer>
  );
};