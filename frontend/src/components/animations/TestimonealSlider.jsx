import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export const TestimonialSlider = ({ testimonials }) => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      }}
      className="testimonial-swiper !pb-12"
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index} className="!h-auto py-5">
          <div className="testimonial-card h-full rounded-2xl border border-slate-100 bg-[#f8f7f2] p-6 shadow-sm transition-all duration-500">
            
            <div className="flex items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <h3 className="text-sm font-bold text-[#17202b]">
                  {testimonial.name}
                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  {testimonial.role}
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-1">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={15}
                  fill="currentColor"
                  className="text-[#d8b84c]"
                />
              ))}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              "{testimonial.review}"
            </p>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};