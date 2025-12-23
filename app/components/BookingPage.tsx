"use client";

import { useState, useEffect } from "react";
import { Calendar, Clock, User, Mail, Phone, Check } from "lucide-react";

type Slot = {
  start: string;
  end: string;
  title?: string;
};
// Available time slot as string

export function BookingPage() {
  const [step, setStep] = useState<"booking" | "confirmation">("booking");
  const [availability, setAvailability] = useState<Slot[]>([]);
  const [loadingAvailability, setLoadingAvailability] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceId: "",
    date: "",
    time: "",
    notes: "",
  });

  const services = [
    {
      id: "initial-assessment",
      name: "Initial Assessment",
      price: 95,
      durationMinutes: 75,
      calEventSlug: "initial-assessment",
    },
    {
      id: "kinesiology-60",
      name: "In-Home Kinesiology Session (60 min)",
      price: 80,
      durationMinutes: 60,
      calEventSlug: "kinesiology-60",
    },
    {
      id: "kinesiology-90",
      name: "In-Home Kinesiology Session (90 min)",
      price: 110,
      durationMinutes: 90,
      calEventSlug: "kinesiology-90",
    },
    {
      id: "progress-review",
      name: "Progress Review",
      price: 40,
      durationMinutes: 30,
      calEventSlug: "progress-review",
    },
  ];

  const selectedService = services.find((s) => s.id === formData.serviceId);

  // Generate hourly times for a slot
  function generateHourlyTimes(slot: Slot) {
    const times: string[] = [];
    let current = new Date(slot.start);
    const end = new Date(slot.end);

    while (current <= end) {
      times.push(current.toISOString());
      current.setHours(current.getHours() + 1);
    }

    return times;
  }

  // Fetch availability whenever date or service changes
  useEffect(() => {
    async function fetchAvailability() {
      if (!formData.date || !formData.serviceId) {
        setAvailability([]);
        return;
      }

      setLoadingAvailability(true);

      try {
        const res = await fetch("/api/cal-availability");
        const data = await res.json();

        // Map available ranges
        const slots = data.dateRanges.map((range: any) => ({
          start: range.start,
          end: range.end,
        }));

        // Filter slots for the selected date
        const daySlots = slots.filter((slot: Slot) =>
          slot.start.startsWith(formData.date)
        );

        setAvailability(daySlots);
      } catch (err) {
        console.error("Failed to fetch availability:", err);
        setAvailability([]);
      } finally {
        setLoadingAvailability(false);
      }
    }

    fetchAvailability();
  }, [formData.date, formData.serviceId]); // ✅ stable primitives

  function getStartAndEnd() {
    if (!selectedService || !formData.time) return null;

    // formData.time is now the ISO string from the dropdown
    const start = new Date(formData.time);
    const end = new Date(
      start.getTime() + selectedService.durationMinutes * 60000
    );

    return {
      startISO: start.toISOString(),
      endISO: end.toISOString(),
    };
  }


  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) return;

    const times = getStartAndEnd();
    if (!times) return;

    try {
      // 1️⃣ Create Cal.com booking
      await fetch("/api/cal-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          start: times.startISO,
          duration: selectedService.durationMinutes,
        }),
      });

      // 2️⃣ Save booking in your database
      await fetch("/api/save-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: selectedService.name,
          serviceId: selectedService.id,
          price: selectedService.price,
          durationMinutes: selectedService.durationMinutes,
          startTime: times.startISO,
          endTime: times.endISO,
          notes: formData.notes,
        }),
      });

      setStep("confirmation");
    } catch (err) {
      console.error(err);
      alert("Booking failed. Please try again.");
    }
  };

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 md:py-20">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-4">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>

            <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
              Booking Confirmed!
            </h1>

            <p className="text-slate-600 text-sm md:text-base">
              Your appointment has been successfully scheduled. A confirmation
              email will be sent shortly.
            </p>

            <div className="bg-slate-50 rounded-xl p-4 md:p-6 text-left space-y-2 md:space-y-3">
              <h3 className="text-lg font-semibold text-slate-900">
                Appointment Details
              </h3>

              <div className="space-y-2 text-sm md:text-base">
                <div className="flex justify-between">
                  <span className="text-slate-600">Service:</span>
                  <span className="text-slate-900">
                    {selectedService?.name}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Duration:</span>
                  <span className="text-slate-900">
                    {selectedService?.durationMinutes} min
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Price:</span>
                  <span className="text-slate-900">
                    ${selectedService?.price}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Date:</span>
                  <span className="text-slate-900">{formData.date}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Time:</span>
                  <span className="text-slate-900">{formData.time}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Name:</span>
                  <span className="text-slate-900">{formData.name}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-600">Email:</span>
                  <span className="text-slate-900">{formData.email}</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setStep("booking");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  serviceId: "",
                  date: "",
                  time: "",
                  notes: "",
                });
              }}
              className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-base md:text-lg"
            >
              Book Another Appointment
            </button>
          </div>

          <footer className="mt-10 text-center text-slate-600 text-sm">
            © 2025 GF-Kin. All rights reserved.
          </footer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-xl md:text-3xl font-semibold text-slate-900 mb-3">
            Book Your Appointment
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
            Schedule your kinesiology session and take the first step toward
            better health.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form
            className="space-y-6 md:space-y-8"
            onSubmit={handleBookingSubmit}
          >
            {/* Personal Info */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
                Personal Information
              </h3>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-slate-700 mb-1 md:mb-2 text-sm md:text-base">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 text-slate-500 rounded-lg text-sm md:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 md:mb-2 text-sm md:text-base">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 text-slate-500 rounded-lg text-sm md:text-base"
                      required
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-slate-700 mb-1 md:mb-2 text-sm md:text-base">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 text-slate-500 rounded-lg text-sm md:text-base"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
                Select Service
              </h3>
              <div className="grid gap-3">
                {services.map((service) => (
                  <label
                    key={service.id}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all text-sm md:text-base ${
                      formData.serviceId === service.id
                        ? "border-emerald-600 bg-emerald-50"
                        : "border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="service"
                        value={service.id}
                        checked={formData.serviceId === service.id}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            serviceId: e.target.value,
                          })
                        }
                        className="w-4 h-4 text-emerald-600"
                        required
                      />
                      <div>
                        <div className="text-slate-900 font-medium">
                          {service.name}
                        </div>
                        <div className="text-slate-500 text-xs md:text-sm">
                          {service.durationMinutes} min
                        </div>
                      </div>
                    </div>

                    <div className="text-slate-900 font-medium">
                      ${service.price}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-slate-900 mb-4">
                Choose Date & Time
              </h3>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-slate-700 mb-1 md:mb-2 text-sm md:text-base">
                    Date *
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 text-slate-500 rounded-lg text-sm md:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-1 md:mb-2 text-sm md:text-base">
                    Time *
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      required
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 text-slate-500 rounded-lg text-sm md:text-base"
                      disabled={
                        loadingAvailability || availability.length === 0
                      }
                    >
                      <option value="">
                        {loadingAvailability
                          ? "Loading..."
                          : availability.length
                          ? "Select time"
                          : "No slots available"}
                      </option>
                      {availability
                        .flatMap((slot) => generateHourlyTimes(slot))
                        .sort((a, b) => {
                          const dateA = new Date(a);
                          const dateB = new Date(b);
                          const minutesA =
                            dateA.getHours() * 60 + dateA.getMinutes();
                          const minutesB =
                            dateB.getHours() * 60 + dateB.getMinutes();
                          return minutesA - minutesB;
                        })
                        .map((isoDateTime) => {
                          const dateObj = new Date(isoDateTime);
                          const hours = dateObj.getHours();
                          const minutes = dateObj.getMinutes();
                          const ampm = hours >= 12 ? "PM" : "AM";
                          const hours12 = hours % 12 || 12;

                          const formattedTime = `${hours12}:${minutes
                            .toString()
                            .padStart(2, "0")} ${ampm}`;

                          return (
                            <option key={isoDateTime} value={isoDateTime}>
                              {formattedTime}
                            </option>
                          );
                        })}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 text-base md:text-lg"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        <footer className="mt-6 md:mt-10 text-center text-slate-600 text-xs md:text-sm">
          © 2025 GF-Kin. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
