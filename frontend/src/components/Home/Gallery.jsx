import Photo1 from "../../assets/GallerySection/Photo1.jpg";
import Photo2 from "../../assets/GallerySection/Photo2.jpg";
import Photo3 from "../../assets/GallerySection/Photo3.jpg";
import Photo4 from "../../assets/GallerySection/Photo4.jpg";
import Photo5 from "../../assets/GallerySection/Photo5.jpg";
import Photo6 from "../../assets/GallerySection/Photo6.jpg";
import Photo7 from "../../assets/GallerySection/Photo7.jpg";

import { ArrowRight } from "lucide-react";
import { HeadingAnimation, Reveal } from "../animations/Reveal";

export const Gallery = () => {
  const photos = [Photo2, Photo3, Photo4, Photo5, Photo6, Photo7];

  return (
    <section
      id="gallery"
      className=" space-y-12"
    >
      <div className="container-size">

        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <Reveal direction="up">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
                Gallery
              </span>
            </Reveal>

            <HeadingAnimation>
              <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-[#17202b] sm:text-5xl">
                Project Gallery
              </h2>
            </HeadingAnimation>
          </div>

          <Reveal direction="right" delay={0.15}>
            <button className="group hidden items-center gap-3 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-[#234f1e] hover:text-[#234f1e] sm:flex">
              View All Photos

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6b7280] transition duration-300 group-hover:border-[#234f1e]">
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </span>
            </button>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">

          <Reveal
            direction="left"
            className="lg:col-span-1 lg:row-span-2"
          >
            <div className="group h-[350px] overflow-hidden rounded-xl sm:h-[400px] lg:h-full lg:min-h-[270px]">
              <img
                src={Photo1}
                alt="Residential building"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>

          {photos.map((photo, index) => (
            <Reveal
              key={index}
              direction="up"
              delay={0.1 + index * 0.08}
            >
              <div className="group h-[200px] overflow-hidden rounded-xl sm:h-[220px] lg:h-full">
                <img
                  src={photo}
                  alt={`Project gallery ${index + 2}`}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" delay={0.2}>
          <button className="group mt-5 flex w-full items-center justify-center gap-3 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:border-[#234f1e] hover:text-[#234f1e] sm:hidden">
            View All Photos

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#6b7280] transition duration-300 group-hover:border-[#234f1e]">
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </button>
        </Reveal>

      </div>
    </section>
  );
};