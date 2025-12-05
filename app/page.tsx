"use client"
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { ServicesPage } from "./components/ServicePage";
import { BookingPage } from "./components/BookingPage";
import { BlogPage } from "./components/BlogPage";

type Page = "home" | "services" | "blog" | "booking";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />

      {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
      {currentPage === "services" && (
        <ServicesPage onNavigate={setCurrentPage} />
      )}
      {currentPage === "blog" && <BlogPage />}
      {currentPage === "booking" && <BookingPage />}
    </div>
  );
}
