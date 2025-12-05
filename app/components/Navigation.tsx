import { Activity } from "lucide-react";

type Page = "home" | "services" | "blog" | "booking";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500">
              <Activity className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="text-slate-800 tracking-wide">GF-Kin</span>
          </button>

          {/* Navigation Links */}
          <div className="flex gap-8">
            <button
              onClick={() => onNavigate("home")}
              className={`transition-colors ${
                currentPage === "home"
                  ? "text-emerald-600"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("services")}
              className={`transition-colors ${
                currentPage === "services"
                  ? "text-emerald-600"
                  : "text-slate-600 hover:text-emerald-600"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => onNavigate("blog")}
              className={`transition-colors ${
                currentPage === "blog"
                  ? "text-emerald-600"
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
        </div>
      </div>
    </nav>
  );
}
