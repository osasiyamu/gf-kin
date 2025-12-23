export function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden px-6">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 animate-fadeIn">
        Coming Soon
      </h1>

      {/* Subtitle */}
      <p className="text-slate-600 text-lg md:text-xl mb-10 animate-fadeIn delay-200 text-center max-w-md">
        I'm working hard to bring you fresh fitness & kinesiology content.
      </p>

      {/* Loading dots */}
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce delay-300"></div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 w-full text-center text-slate-500 text-sm z-10">
        © {new Date().getFullYear()} GF-Kin. All rights reserved.
      </footer>
    </div>
  );
}
