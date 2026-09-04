import { ArrowRight, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import HeroImage from "../../assets/HeroSection/HeroImage.jpg";
import MobielHeroImage from "../../assets/HeroSection/MobileHeroImage.jpg";
import {
    HeadingAnimation,
    HeroContentAnimation,
    Reveal
} from "../animations/Reveal";

export const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative min-h-[620px] overflow-hidden bg-[#f7f5ef] sm:min-h-[700px] lg:min-h-[750px]"
        >
            <div className="absolute inset-0">
                <picture className="block h-full w-full">
                    <source
                        media="(max-width: 639px)"
                        srcSet={MobielHeroImage}
                    />

                    <img
                        src={HeroImage}
                        alt="Modern residential apartment project"
                        className="h-full w-full  object-center"
                    />
                </picture>

                <div className="absolute inset-0 bg-black/35 sm:bg-transparent" />
            </div>

            <div className="relative mx-auto flex min-h-[620px] max-w-[1740px] items-center px-5 py-16 sm:min-h-[700px] sm:px-8 sm:py-20 lg:min-h-[750px] lg:px-10">
                <HeroContentAnimation>
                    <div className="max-w-[560px]">
                        <Reveal delay={0.15}>
                            <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wide  text-white lg:text-[#315f2a] sm:mb-5 sm:text-[11px]">
                                <Sparkles size={13} />
                                Premium Living, Perfect Location
                            </div>
                        </Reveal>

                        <HeadingAnimation>
                            <h1 className="font-serif text-[42px] font-bold leading-[1.1] tracking-tight text-white lg:text-[#17202b] sm:text-6xl lg:text-[70px]">
                                Modern Living in the{" "}
                                <span className="text-[#d4af37] lg:text-[#dbb022]">
                                    Heart of the City
                                </span>
                            </h1>
                        </HeadingAnimation>

                        <Reveal delay={0.4}>
                            <p className="mt-5 max-w-[510px] text-x font-semibold leading-6 text-[#e1ecd4] lg:text-[#e6eefc] sm:mt-6 sm:text-xl sm:leading-7">
                                Experience a lifestyle that blends comfort,
                                convenience and luxury. Your dream home is now
                                closer than you think.
                            </p>
                        </Reveal>

                        <Reveal delay={0.5}>
                            <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">
                                <a
                                href="#lead-form"
                                className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#d8c878] px-5 py-3 text-base font-semibold text-[#263238] shadow-sm transition duration-300 hover:bg-[#dbc036] hover:shadow-md sm:w-auto sm:px-6 sm:text-lg lg:text-xl"
                                >
                                Book a Site Visit

                                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#263238]/30 transition duration-300 group-hover:border-[#263238]">
                                    <ArrowRight
                                    size={15}
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                    />
                                </span>
                                </a>

                                <a
                                    href="#project"
                                    className="group inline-flex w-full items-center justify-center gap-3 rounded-md border border-[#b9b4aa] bg-white/80 px-5 py-3 text-base font-semibold text-[#263238] backdrop-blur-sm transition duration-300 hover:border-[#163013] hover:text-[#234f1e] sm:w-auto sm:text-lg lg:text-xl"
                                >
                                    View Project Details

                                    <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#6b7280] transition duration-300 group-hover:border-[#234f1e] sm:h-8 sm:w-8">
                                        <ArrowRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-0.5"
                                        />
                                    </span>
                                </a>
                            </div>
                        </Reveal>

                        <Reveal delay={0.65}>
                            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-x-7">
                                <div className="flex items-center gap-2 text-[13px] font-bold text-[#e1ecd4] lg:text-[#4b5563] sm:text-[14px]">
                                    <MapPin
                                        size={16}
                                        className=" text-[#e1ecd4] lg:text-[#315f2a]"
                                    />
                                    Prime Location
                                </div>

                                <div className="flex items-center gap-2 text-[13px] font-bold text-[#e1ecd4] lg:text-[#4b5563] sm:text-[14px]">
                                    <Sparkles
                                        size={16}
                                        className=" text-[#e1ecd4] lg:text-[#315f2a]"
                                    />
                                    Modern Amenities
                                </div>

                                <div className="flex items-center gap-2 text-[13px] font-bold text-[#e1ecd4] lg:text-[#4b5563] sm:text-[14px]">
                                    <ShieldCheck
                                        size={16}
                                        className="text-[#e1ecd4] lg:text-[#315f2a]"
                                    />
                                    Secure Environment
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </HeroContentAnimation>
            </div>
        </section>
    );
};