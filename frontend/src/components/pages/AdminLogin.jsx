import { LockKeyhole, Mail, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { SummaryApi } from "../common/SummaryApi";
import { Axios } from "../common/Axios";
import { toast } from "react-toastify";

export const AdminLogin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            return toast.error("Email and password are required");
        }

        try {
            setLoading(true);

            const res = await Axios({
                ...SummaryApi.admin_login,
                data: formData,
            });

            if (res.data.success) {
                localStorage.setItem("adminToken", res.data.token);

                toast.success(res.data.message);

                navigate("/admin-dashboard");
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen bg-[#f7f5ef] px-5 py-10 sm:px-8 lg:px-10">
            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-[1200px] items-center justify-center">
                <div className="grid w-full max-w-[950px] overflow-hidden rounded-2xl bg-white shadow-xl lg:grid-cols-2">
                    <div className="hidden bg-[#234f1e] p-10 text-white lg:flex lg:flex-col lg:justify-between">
                        <div>
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
                            >
                                <ArrowLeft size={17} />
                                Back to Website
                            </Link>

                            <div className="mt-20">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                                    Admin Portal
                                </p>

                                <h1 className="mt-4 font-serif text-5xl font-bold leading-tight">
                                    Manage Your
                                    <span className="block text-[#d4af37]">
                                        Property Leads
                                    </span>
                                </h1>

                                <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
                                    Secure access to manage customer inquiries,
                                    site visit requests and property leads.
                                </p>
                            </div>
                        </div>

                        <p className="text-sm text-white/50">
                            © 2026 ABDUR'S HEIGHTS
                        </p>
                    </div>

                    <div className="p-6 sm:p-10 lg:p-12">
                        <div className="mx-auto max-w-md">
                            <Link
                                to="/"
                                className="inline-flex items-center gap-2 text-sm font-medium text-[#315f2a] lg:hidden"
                            >
                                <ArrowLeft size={17} />
                                Back to Website
                            </Link>

                            <div className="mt-8 lg:mt-0">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f5f1df]">
                                    <LockKeyhole
                                        size={25}
                                        className="text-[#b59632]"
                                    />
                                </div>

                                <h2 className="mt-6 font-serif text-3xl font-bold text-[#17202b] sm:text-4xl">
                                    Welcome Back
                                </h2>

                                <p className="mt-2 text-sm leading-6 text-slate-500">
                                    Sign in to access the admin dashboard.
                                </p>
                            </div>

                            <form
                                onSubmit={handleSubmit}
                                className="mt-8 space-y-5"
                            >
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#17202b]">
                                        Email Address
                                    </label>

                                    <div className="relative">
                                        <Mail
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                        />

                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                            className="w-full rounded-md border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#315f2a]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-[#17202b]">
                                        Password
                                    </label>

                                    <div className="relative">
                                        <LockKeyhole
                                            size={18}
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                                        />

                                        <input
                                            type="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="Enter your password"
                                            className="w-full rounded-md border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#315f2a]"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-md bg-[#234f1e] py-3.5 text-sm font-semibold text-white transition hover:bg-[#193a16] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {loading
                                        ? "Signing In..."
                                        : "Sign In to Dashboard"}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};