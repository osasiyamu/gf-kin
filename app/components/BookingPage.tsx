"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  CreditCard,
  Check,
} from "lucide-react";

export function BookingPage() {
  const [step, setStep] = useState<"booking" | "payment" | "confirmation">(
    "booking"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    notes: "",
  });

  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const services = [
    { name: "Muscle Testing & Assessment", price: "$90", duration: "60 min" },
    { name: "Movement Therapy", price: "$110", duration: "75 min" },
    { name: "Stress & Emotional Balance", price: "$90", duration: "60 min" },
    { name: "Energy Balancing", price: "$90", duration: "60 min" },
    { name: "Pain Management", price: "$110", duration: "75 min" },
    { name: "Sports Performance", price: "$130", duration: "90 min" },
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmation");
  };

  const selectedService = services.find((s) => s.name === formData.service);

  /* -------------------------------- CONFIRMATION -------------------------------- */

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              <Check className="w-8 h-8 text-emerald-600" />
            </div>

            <h1 className="text-slate-900 mb-4">Booking Confirmed!</h1>

            <p className="text-slate-600 mb-8">
              Your appointment has been successfully scheduled. A confirmation
              email will be sent shortly.
            </p>

            <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
              <h3 className="text-slate-900 mb-4">Appointment Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-600">Service:</span>
                  <span className="text-slate-900">{formData.service}</span>
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
                  service: "",
                  date: "",
                  time: "",
                  notes: "",
                });
                setPaymentData({
                  cardNumber: "",
                  cardName: "",
                  expiryDate: "",
                  cvv: "",
                });
              }}
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Book Another Appointment
            </button>
          </div>

          {/* Footer */}
          <footer className="mt-10 text-center text-slate-600">
            <p>&copy; 2025 GF-Kin. All rights reserved.</p>
          </footer>
        </div>
      </div>
    );
  }

  /* -------------------------------- PAYMENT -------------------------------- */

  if (step === "payment") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <button
              onClick={() => setStep("booking")}
              className="text-emerald-600 hover:text-emerald-700 flex items-center gap-2"
            >
              ← Back to booking details
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-slate-900 mb-6">Payment Details</h2>

                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <label className="block text-slate-700 mb-2">
                      Card Number
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        value={paymentData.cardNumber}
                        onChange={(e) =>
                          setPaymentData({
                            ...paymentData,
                            cardNumber: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={paymentData.cardName}
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          cardName: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={paymentData.expiryDate}
                        onChange={(e) =>
                          setPaymentData({
                            ...paymentData,
                            expiryDate: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 mb-2">CVV</label>
                      <input
                        type="text"
                        placeholder="123"
                        value={paymentData.cvv}
                        onChange={(e) =>
                          setPaymentData({
                            ...paymentData,
                            cvv: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-800">
                    <strong>Note:</strong> This is a demo payment form. No
                    actual payment will be processed.
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
                  >
                    Complete Booking
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 lg:sticky lg:top-24">
                <h3 className="text-slate-900 mb-4">Order Summary</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-slate-900 mb-1">
                      {formData.service}
                    </div>
                    <div className="text-slate-600 text-sm">
                      {selectedService?.duration}
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="text-slate-600 text-sm mb-1">
                      Date & Time
                    </div>
                    <div className="text-slate-900">{formData.date}</div>
                    <div className="text-slate-900">{formData.time}</div>
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between text-slate-900">
                      <span>Total</span>
                      <span>{selectedService?.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="mt-8 text-center text-slate-600">
                <p>&copy; 2025 GF-Kin. All rights reserved.</p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* -------------------------------- BOOKING -------------------------------- */

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-slate-900 mb-4">Book Your Appointment</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Schedule your kinesiology session and take the first step toward
            better health.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleBookingSubmit} className="space-y-6">
            {/* Personal Information */}
            <div>
              <h3 className="text-slate-900 mb-4">Personal Information</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-slate-700 mb-2">
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
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-slate-700 mb-2">Email *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="md:col-span-2">
                  <label className="block text-slate-700 mb-2">
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
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Select Service */}
            <div>
              <h3 className="text-slate-900 mb-4">Select Service</h3>

              <div className="grid gap-3">
                {services.map((service) => (
                  <label
                    key={service.name}
                    className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      formData.service === service.name
                        ? "border-emerald-600 bg-emerald-50"
                        : "border-slate-200 hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        name="service"
                        value={service.name}
                        checked={formData.service === service.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service: e.target.value,
                          })
                        }
                        className="w-4 h-4 text-emerald-600"
                        required
                      />
                      <div>
                        <div className="text-slate-900">{service.name}</div>
                        <div className="text-slate-500 text-sm">
                          {service.duration}
                        </div>
                      </div>
                    </div>

                    <div className="text-slate-900">{service.price}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date & Time */}
            <div>
              <h3 className="text-slate-900 mb-4">Choose Date & Time</h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Date */}
                <div>
                  <label className="block text-slate-700 mb-2">Date *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Time */}
                <div>
                  <label className="block text-slate-700 mb-2">Time *</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <select
                      value={formData.time}
                      onChange={(e) =>
                        setFormData({ ...formData, time: e.target.value })
                      }
                      className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      required
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-slate-700 mb-2">
                Additional Notes (optional)
              </label>
              <textarea
                placeholder="Any specific concerns or info you'd like to share..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
            >
              Continue to Payment
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center text-slate-600">
          <p>&copy; 2025 GF-Kin. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
