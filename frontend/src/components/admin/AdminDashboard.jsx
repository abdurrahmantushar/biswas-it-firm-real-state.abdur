import {
    Bell,
    ChevronDown,
    Download,
    LayoutDashboard,
    LogOut,
    Mail,
    Menu,
    Phone,
    RefreshCw,
    Search,
    Users,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Axios } from "../common/Axios";
import { SummaryApi } from "../common/SummaryApi";
import { toast } from "react-toastify";

export const AdminDashboard = () => {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const fetchLeads = async () => {
        try {
            setLoading(true);

            const res = await Axios({
                ...SummaryApi.get_fromData,
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
                },
            });

            if (res.data.success) {
                setLeads(res.data.data);
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Failed to fetch leads"
            );
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchLeads();
    }, []);

    const filteredLeads = leads.filter((lead) => {
        const value = search.toLowerCase();

        return (
            lead.name?.toLowerCase().includes(value) ||
            lead.email?.toLowerCase().includes(value) ||
            lead.phone?.toLowerCase().includes(value) ||
            lead.apartmentType?.toLowerCase().includes(value)
        );
    });

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        window.location.href = "/admin/login";
    };

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <section className="min-h-screen bg-[#f7f5ef]">
            <div className="flex min-h-screen">
                <aside
                    className={`fixed inset-y-0 left-0 z-50 w-64 bg-[#e7dcbc] text-white transition-transform duration-300 lg:static lg:translate-x-0 ${
                        sidebarOpen
                            ? "translate-x-0"
                            : "-translate-x-full"
                    }`}
                >
                    <div className="flex h-full flex-col">
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-6">
                            <div>
                                <p className="font-serif text-xl font-bold text-black">
                                    ABDUR'S
                                </p>
                                <p className="text-[12px] font-bold tracking-[0.3em] text-[#d4af37]">
                                    HEIGHTS
                                </p>
                            </div>

                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <nav className="flex-1 px-4 py-8">
                            <p className="mb-4 px-3 text-[12px] font-bold uppercase tracking-[0.2em] text-gray-800">
                                Main Menu
                            </p>

                            <button className="flex w-full items-center gap-3 rounded-lg bg-gray-700 px-4 py-3 text-sm font-medium">
                                <LayoutDashboard size={18} />
                                Dashboard
                            </button>
                        </nav>

                        <div className="border-t border-white/10 p-4">
                            <button
                                onClick={handleLogout}
                                className="flex w-full items-center gap-3 rounded-lg px-4 py-3 mb-10 text-x font-semibold text-black transition hover:bg-white/10 hover:text-gray-600"
                            >
                                <LogOut size={20} />
                                Logout
                            </button>
                        </div>
                    </div>
                </aside>

                {sidebarOpen && (
                    <div
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 z-40 bg-black/40 lg:hidden"
                    />
                )}

                <main className="min-w-0 flex-1">
                    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8 lg:px-10">
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setSidebarOpen(true)}
                                className="lg:hidden"
                            >
                                <Menu size={22} />
                            </button>

                            <div>
                                <h1 className="font-serif text-2xl font-bold text-[#17202b]">
                                    Dashboard
                                </h1>
                                <p className="hidden text-xs text-slate-500 sm:block">
                                    Manage your property leads
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <button className="relative text-slate-500">
                                <Bell size={20} />
                                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#d4af37]" />
                            </button>

                            <div className="hidden h-8 w-px bg-slate-200 sm:block" />

                            <div className="flex items-center gap-3">
                                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#234f1e] text-sm font-bold text-white">
                                    A
                                </div>

                                <div className="hidden sm:block">
                                    <p className="text-sm font-semibold text-[#17202b]">
                                        Admin
                                    </p>
                                    <p className="text-[11px] text-slate-400">
                                        Administrator
                                    </p>
                                </div>

                                <ChevronDown
                                    size={15}
                                    className="hidden text-slate-400 sm:block"
                                />
                            </div>
                        </div>
                    </header>

                    <div className="p-5 sm:p-8 lg:p-10">
                        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#e9f3e7]">
                                        <Users
                                            size={21}
                                            className="text-[#234f1e]"
                                        />
                                    </div>

                                    <span className="text-xs font-semibold text-green-600">
                                        Total
                                    </span>
                                </div>

                                <p className="mt-5 text-3xl font-bold text-[#17202b]">
                                    {leads.length}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Total Leads
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f5f1df]">
                                        <Mail
                                            size={21}
                                            className="text-[#b59632]"
                                        />
                                    </div>

                                    <span className="text-xs font-semibold text-[#b59632]">
                                        New
                                    </span>
                                </div>

                                <p className="mt-5 text-3xl font-bold text-[#17202b]">
                                    {leads.length}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    New Inquiries
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#edf2f7]">
                                        <Phone
                                            size={21}
                                            className="text-slate-600"
                                        />
                                    </div>

                                    <span className="text-xs font-semibold text-slate-500">
                                        Leads
                                    </span>
                                </div>

                                <p className="mt-5 text-3xl font-bold text-[#17202b]">
                                    {leads.filter((lead) => lead.phone).length}
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Contactable Leads
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-6 shadow-sm">
                                <div className="flex items-center justify-between">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f1eaf4]">
                                        <LayoutDashboard
                                            size={21}
                                            className="text-purple-600"
                                        />
                                    </div>

                                    <span className="text-xs font-semibold text-purple-600">
                                        Types
                                    </span>
                                </div>

                                <p className="mt-5 text-3xl font-bold text-[#17202b]">
                                    {
                                        new Set(
                                            leads.map(
                                                (lead) => lead.apartmentType
                                            )
                                        ).size
                                    }
                                </p>

                                <p className="mt-1 text-sm text-slate-500">
                                    Apartment Types
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 rounded-xl bg-white shadow-sm">
                            <div className="border-b border-slate-100 p-5 sm:p-6">
                                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                                    <div>
                                        <h2 className="font-serif text-xl font-bold text-[#17202b]">
                                            Recent Leads
                                        </h2>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Customer inquiries and property
                                            requests
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-3 sm:flex-row">
                                        <div className="relative">
                                            <Search
                                                size={17}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                                            />

                                            <input
                                                type="text"
                                                value={search}
                                                onChange={(e) =>
                                                    setSearch(e.target.value)
                                                }
                                                placeholder="Search leads..."
                                                className="w-full rounded-lg border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#315f2a] sm:w-64"
                                            />
                                        </div>

                                        <button
                                            onClick={fetchLeads}
                                            className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
                                        >
                                            <RefreshCw
                                                size={16}
                                                className={
                                                    loading
                                                        ? "animate-spin"
                                                        : ""
                                                }
                                            />
                                            Refresh
                                        </button>

                                        <button className="flex items-center justify-center gap-2 rounded-lg bg-[#234f1e] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#193a16]">
                                            <Download size={16} />
                                            Export
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[850px] text-left">
                                    <thead>
                                        <tr className="border-b border-slate-100 bg-slate-50/70">
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Name
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Contact
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Apartment
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Message
                                            </th>
                                            <th className="px-6 py-4 text-xs font-bold uppercase tracking-wide text-slate-500">
                                                Submitted
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {loading ? (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="px-6 py-16 text-center text-sm text-slate-500"
                                                >
                                                    Loading leads...
                                                </td>
                                            </tr>
                                        ) : filteredLeads.length === 0 ? (
                                            <tr>
                                                <td
                                                    colSpan="5"
                                                    className="px-6 py-16 text-center text-sm text-slate-500"
                                                >
                                                    No leads found
                                                </td>
                                            </tr>
                                        ) : (
                                            filteredLeads.map((lead) => (
                                                <tr
                                                    key={lead.id}
                                                    className="border-b border-slate-100 transition hover:bg-slate-50"
                                                >
                                                    <td className="px-6 py-5">
                                                        <p className="font-semibold text-[#17202b]">
                                                            {lead.name}
                                                        </p>
                                                    </td>

                                                    <td className="px-6 py-5">
                                                        <p className="text-sm text-slate-700">
                                                            {lead.email}
                                                        </p>
                                                        <p className="mt-1 text-xs text-slate-400">
                                                            {lead.phone}
                                                        </p>
                                                    </td>

                                                    <td className="px-6 py-5">
                                                        <span className="rounded-full bg-[#f5f1df] px-3 py-1 text-xs font-semibold text-[#806d2b]">
                                                            {
                                                                lead.apartmentType
                                                            }
                                                        </span>
                                                    </td>

                                                    <td className="max-w-[260px] px-6 py-5">
                                                        <p className="truncate text-sm text-slate-600">
                                                            {lead.message}
                                                        </p>
                                                    </td>

                                                    <td className="whitespace-nowrap px-6 py-5 text-sm text-slate-500">
                                                        {formatDate(
                                                            lead.createdAt
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            <div className="flex flex-col gap-3 border-t border-slate-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-xs text-slate-500">
                                    Showing{" "}
                                    <span className="font-semibold text-slate-700">
                                        {filteredLeads.length}
                                    </span>{" "}
                                    of{" "}
                                    <span className="font-semibold text-slate-700">
                                        {leads.length}
                                    </span>{" "}
                                    leads
                                </p>

                                <p className="text-xs text-slate-400">
                                    Updated just now
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};