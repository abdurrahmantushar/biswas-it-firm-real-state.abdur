import { ArrowRight, CheckCircle2, Phone, User, Mail } from "lucide-react";
import { Reveal, HeadingAnimation } from "../animations/Reveal";
import { useState } from "react";
import { SummaryApi } from "../common/SummaryApi";
import { Axios } from "../common/Axios";
import {toast} from 'react-toastify'

export const LeadForm = () => {

  const [formData, setFormData] = useState({
    name:'',
    email : '',
    phone : '',
    apartmentType: "",
    message: "",
  })

  const handleChange = (e) =>{

       const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "apartment" ? "apartmentType" : id]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios({
        ...SummaryApi.fromData,
        data: formData,
      });

      if (res.data.success) {
        toast.success('From submited successfully');

        setFormData({
          name: "",
          email: "",
          phone: "",
          apartmentType: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Something went wrong"
      );

      console.log(error);
    }
  };
  return (
<section id="lead-form" className="px-0">
      <Reveal direction="right">
        <div className="rounded-2xl border border-[#e4dfcf] bg-[#f7f5ef] p-6 shadow-lg sm:p-8">

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315f2a]">
              Get In Touch
            </span>

            <HeadingAnimation>
              <h2 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#17202b]">
                Find Your
                <span className="block text-[#315f2a]">
                  Dream Home
                </span>
              </h2>
            </HeadingAnimation>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Fill out the form and our property consultant will contact you
              shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-7 space-y-4">

            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-xs font-semibold text-[#263238]"
              >
                Full Name
              </label>

              <div className="relative">
                <User
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#315f2a]"
                />

                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-[#dcd8cc] bg-white px-10 py-3 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#315f2a] focus:ring-2 focus:ring-[#315f2a]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-xs font-semibold text-[#263238]"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#315f2a]"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-[#dcd8cc] bg-white px-10 py-3 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#315f2a] focus:ring-2 focus:ring-[#315f2a]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-xs font-semibold text-[#263238]"
              >
                Phone Number
              </label>

              <div className="relative">
                <Phone
                  size={17}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#315f2a]"
                />

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border border-[#dcd8cc] bg-white px-10 py-3 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#315f2a] focus:ring-2 focus:ring-[#315f2a]/10"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="apartment"
                className="mb-1.5 block text-xs font-semibold text-[#263238]"
              >
                Apartment Type
              </label>

              <select
                id="apartment"
                value={formData.apartmentType}
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#dcd8cc] bg-white px-3 py-3 text-sm text-slate-700 outline-none transition duration-300 focus:border-[#315f2a] focus:ring-2 focus:ring-[#315f2a]/10"
              >
                <option value="">Select apartment type</option>
                <option value="2-bedroom">2 Bedroom Apartment</option>
                <option value="3-bedroom">3 Bedroom Apartment</option>
                <option value="premium">Premium Apartment</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-semibold text-[#263238]"
              >
                Message
              </label>

              <textarea
                id="message"
                rows="3"
                placeholder="Tell us what you are looking for..."
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-y rounded-md border border-[#dcd8cc] bg-white px-3 py-3 text-sm text-slate-800 outline-none transition duration-300 placeholder:text-slate-400 focus:border-[#315f2a] focus:ring-2 focus:ring-[#315f2a]/10"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-[#d8c878] px-5 py-3 text-sm font-bold text-[#263238] transition duration-300 hover:bg-[#dbc036] hover:shadow-md"
            >
              Request a Callback

              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/40 transition duration-300 group-hover:border-white">
                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>

          </form>

          <div className="mt-5 flex items-center justify-center gap-2 text-[11px] font-medium text-slate-500">
            <CheckCircle2
              size={14}
              className="text-[#315f2a]"
            />
            Your information is safe with us
          </div>

        </div>
      </Reveal>
    </section>
  );
};