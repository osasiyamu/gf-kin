import { Activity, Menu, X } from "lucide-react";
import { useState } from "react";

type Page = "home" | "services" | "blog" | "booking";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate("home");
              setOpen(false);
            }}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
              <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>

            {/* Mobile: smaller text | Desktop: unchanged */}
            <span className="text-slate-800 font-semibold text-base md:text-lg tracking-wide">
              GF-Kin
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-[15px]">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-emerald-600 font-medium"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => onNavigate("services")}
              className={`transition-colors ${
                currentPage === "services"
                  ? "text-emerald-600 font-medium"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Services
            </button>

            <button
              onClick={() => onNavigate("blog")}
              className={`transition-colors ${
                currentPage === "blog"
                  ? "text-emerald-600 font-medium"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Blog
            </button>

            <button
              onClick={() => onNavigate("booking")}
              className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Book Appointment
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="w-6 h-6 text-slate-700" />
            ) : (
              <Menu className="w-6 h-6 text-slate-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-1 pt-2">
              <button
                onClick={() => {
                  onNavigate("home");
                  setOpen(false);
                }}
                className={`px-3 py-2 text-left text-[15px] ${
                  currentPage === "home"
                    ? "text-emerald-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => {
                  onNavigate("services");
                  setOpen(false);
                }}
                className={`px-3 py-2 text-left text-[15px] ${
                  currentPage === "services"
                    ? "text-emerald-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                Services
              </button>

              <button
                onClick={() => {
                  onNavigate("blog");
                  setOpen(false);
                }}
                className={`px-3 py-2 text-left text-[15px] ${
                  currentPage === "blog"
                    ? "text-emerald-600 font-semibold"
                    : "text-slate-700"
                }`}
              >
                Blog
              </button>

              <button
                onClick={() => {
                  onNavigate("booking");
                  setOpen(false);
                }}
                className="mt-3 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-center text-[15px] font-medium"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
