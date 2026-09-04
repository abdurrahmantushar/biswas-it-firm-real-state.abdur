import { Menu, X ,ArrowRight,LogIn} from "lucide-react";
import { useState } from "react";
import { TbBuildingCommunity } from "react-icons/tb";

export const NavBar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
            <div className="container-size flex h-16 items-center justify-between px-5 lg:px-8">
                <a href="#home" className="flex items-center gap-2">
                    <div className="flex  items-center justify-center rounded-full ">
                        <span className="text-lg font-bold text-[#e1cd92]">
                            <TbBuildingCommunity className="h-10 w-10" />
                        </span>
                    </div>

                    <div className="leading-none">
                        <h1 className="font-serif text-lg font-bold text-slate-700">
                            ABDUR'S
                        </h1>
                        <p className="text-[12px]  font-bold tracking-[0.25em] text-[#ddbf66]">
                            HEIGHTS
                        </p>
                    </div>
                </a>

                <nav className="hidden items-center gap-9 lg:flex">
                    <a href="#home" className="nav-li">
                        Home
                    </a>
                    <a href="#project" className="nav-li">
                        Project
                    </a>
                    <a href="#amenities" className="nav-li">
                        Amenities
                    </a>
                    <a href="#gallery" className="nav-li">
                        Gallery
                    </a>
                    <a href="#investments" className="nav-li">
                        Investments
                    </a>
                    <a href="#testimonials" className="nav-li">
                        Testimonials
                    </a>
                    <a href="#faq" className="nav-li">
                        FAQ
                    </a>
                    <a href="lead-form" className="nav-li">
                        Contact
                    </a>
                </nav>

                    <a
                    href="#lead-form"
                    className="group hidden items-center gap-2 rounded-md bg-[#d8c878] px-5 py-2.5 text-sm font-semibold text-[#263238] transition duration-300 hover:bg-[#dbc036] lg:inline-flex"
                    >
                    Book a Site Visit

                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#263238]/30 transition duration-300 group-hover:border-[#263238]">
                        <ArrowRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </span>
                    </a>
                    <a
                    href="/admin-login"
                    className="flex items-center gap-2 rounded-md border border-[#234f1e] px-5 py-2.5 text-sm font-semibold text-[#234f1e]"
                    >
                    <LogIn size={17} />
                    Admin Login
                    </a>
                <button
                    onClick={() => setOpen(!open)}
                    className="text-slate-800 lg:hidden"
                >
                    {open ? <X size={25} /> : <Menu size={25} />}
                </button>
            </div>

            {open && (
                <div className="border-t border-slate-100 bg-white px-5 py-5 lg:hidden">
                    <div className="flex flex-col gap-4">
                        <a href="#home" onClick={() => setOpen(false)}>Home</a>
                        <a href="#project" onClick={() => setOpen(false)}>Project</a>
                        <a href="#amenities" onClick={() => setOpen(false)}>Amenities</a>
                        <a href="#gallery" onClick={() => setOpen(false)}>Gallery</a>
                        <a href="#location" onClick={() => setOpen(false)}>Location</a>
                        <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
                        <a href="#faq" onClick={() => setOpen(false)}>FAQ</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

                        <a
                            href="#lead-form"
                            onClick={() => setOpen(false)}
                            className="w-fit rounded-md bg-[#d8c878] px-5 py-2.5 text-sm font-semibold text-white"
                        >
                            Book a Site Visit
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};