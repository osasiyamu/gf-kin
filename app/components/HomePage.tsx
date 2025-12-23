import { useState, useEffect } from "react";
import { Heart, Users, Award, ArrowRight, Star, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Page = "home" | "services" | "booking";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

type Testimonial = {
  id: string;
  name: string;
  service: string;
  rating: number;
  comment: string;
  created_at: string;
};

export function HomePage({ onNavigate }: HomePageProps) {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    


  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    service: "",
    rating: 0,
    comment: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitTestimonial = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("testimonials")
      .insert([newTestimonial])
      .select();

    if (error) {
      console.error("Error submitting testimonial:", error.message);
      alert(
        "There was an error submitting your testimonial. Please try again."
      );
      return;
    }

    setSubmitted(true);
    setNewTestimonial({
      name: "",
      service: "",
      rating: 0,
      comment: "",
    });

    // Optional: hide confirmation after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };
  const features = [
    {
      icon: Heart,
      title: "Holistic Approach",
      description:
        "I support both the physical and emotional sides of movement. Each session blends kinesiology, rehab, and therapeutic awareness to help you feel stronger, safer, and more confident in your body.",
    },
    {
      icon: Users,
      title: "Personalized Care",
      description:
        "Every program is tailored to your goals, abilities, and lived experience. I meet you in your home, at your pace, with plans designed to support real-life function and long-term progress.",
    },
    {
      icon: Award,
      title: "Expert Experience",
      description:
        "With credentials in kinesiology, rehabilitation, and psychotherapy, I bring a unique combination of clinical knowledge and compassionate support to every session.",
    },
  ];

  const services = [
    {
      title: "Injury Rehab & Recovery",
      description:
        "Personalized rehabilitation to reduce pain, rebuild strength, and restore proper movement after injuries or chronic physical limitations.",
      image:
        "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc2NDc3Njk5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Strength, Mobility & Functional Training",
      description:
        "One-on-one training focused on improving strength, balance, flexibility, and confidence in everyday movement and physical performance.",
      image:
        "https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NjQ3MDI4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Aging & Daily Living Support",
      description: "In-home kinesiology for older adults or clients with disabilities—enhancing mobility, safety, independence, and quality of life.",
      image:
        "https://images.unsplash.com/photo-1740350631565-6a5081a2f841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHdlbGxuZXNzJTIwc3BhfGVufDF8fHx8MTc2NDc3Njk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  useEffect(() => {
    async function loadTestimonials() {
      try {
        const res = await fetch("/api/testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (err) {
        console.error("Failed to load testimonials:", err);
      } finally {
        setLoading(false);
      }
    }

    loadTestimonials();
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 sm:py-20 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative -mt-8 lg:mt-0">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={services[0].image}
                alt="Wellness therapy session"
                className="w-full h-64 sm:h-80 md:h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-teal-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-32 sm:h-32 bg-emerald-400 rounded-full opacity-20 blur-2xl"></div>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="-mt-4 text-xl sm:text-xl md:text-3xl font-bold text-slate-900 mb-6 leading-snug">
              Welcome to GF Kin
              <br />
              {/* <br />
              Live Better. */}
            </h1>
            <h3 className="-mt-5 text-md sm:text-sm md:text-xl font-semibold text-slate-500 mb-6 leading-snug">
              Movement, Strength & Support for Real Life
            </h3>
            <p className="-mt-1 text-sm md:text-base lg:text-md text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              I’m a Registered Kinesiologist (R. Kin), specializing in helping
              people move better, feel stronger, and regain confidence in their
              bodies. With a background in exercise science, rehabilitation, and
              mental health, I bring a uniquely integrated approach to every
              session I deliver.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate("booking")}
                className="-mt-1 md:mt-0 px-6 py-2 md:py-3 bg-emerald-600 text-sm md:text-base text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Book Your Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="px-6 py-2 md:py-3 border-2 border-emerald-600 text-sm md:text-base text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-900 mb-4">
              What I Do
            </h2>
            <p className="text-sm sm:text-md md:text-base text-slate-600 max-w-2xl mx-auto">
              I provide in-home kinesiology and functional training services
              designed to help you move better, feel stronger, and live more
              fully.
              {/* My approach integrates the following: */}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-4 sm:p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-slate-900 mb-2 sm:mb-3 font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-xl md:text-3xl font-bold text-slate-900 mb-4">
              Featured Services
            </h2>
            <p className="text-sm sm:text-xl md:text-base text-slate-600 max-w-2xl mx-auto">
              Discover how my specialized kinesiology services can help you
              achieve your health and wellness goals.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="h-48 sm:h-56 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-md md:text-lg text-slate-600 text-slate-900 mb-1 sm:mb-2 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-md text-slate-600 text-sm sm:text-base md:mt-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate("services")}
              className="text-sm sm:text-md md:text-base px-6 py-3 sm:px-8 sm:py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Only shows when there is data) */}
      {!loading && testimonials.length > 0 && (
        <section className="py-16 px-4 sm:py-20 sm:px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">
                Client Testimonials
              </h2>
              <p className="text-sm sm:text-xl md:text-base text-slate-600 max-w-2xl mx-auto">
                Read what my clients have to say about their experiences and
                results.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-slate-50 rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-slate-900 font-semibold">
                        {testimonial.name}
                      </div>
                      <div className="text-slate-500 text-sm">
                        {testimonial.service}
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            star <= testimonial.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Comment */}
                  <p className="text-sm sm:text-xl md:text-lg text-slate-600 mb-4">
                    {testimonial.comment}
                  </p>

                  {/* Date */}
                  <div className="text-slate-400 text-sm">
                    {new Date(testimonial.created_at).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                      }
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Loading State */}
      {loading && (
        <p className="text-center text-slate-500 py-10">
          Loading testimonials...
        </p>
      )}

      {/* Add Testimonial Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-3xl font-bold text-slate-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-sm sm:text-xl md:text-lg text-slate-600">
              Have you worked with me? I'd love to hear about your experience!
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-center">
              Thank you for your testimonial! It has been submitted
              successfully.
            </div>
          )}

          <form
            onSubmit={handleSubmitTestimonial}
            className="bg-white rounded-xl p-6 sm:p-8 shadow-md space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm md:text-md lg:text-lg text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-slate-300 text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm md:text-md lg:text-lg text-slate-700 mb-2">
                  Service Received *
                </label>
                <select
                  value={newTestimonial.service}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      service: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-slate-300 text-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Muscle Testing">Muscle Testing</option>
                  <option value="Movement Therapy">Movement Therapy</option>
                  <option value="Stress & Emotional Balance">
                    Stress & Emotional Balance
                  </option>
                  <option value="Energy Balancing">Energy Balancing</option>
                  <option value="Pain Management">Pain Management</option>
                  <option value="Sports Performance">Sports Performance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm md:text-md lg:text-lg text-slate-700 mb-2">
                Your Rating *
              </label>
              <div className="flex gap-2 flex-wrap">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() =>
                      setNewTestimonial({ ...newTestimonial, rating: star })
                    }
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= (hoveredRating || newTestimonial.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-slate-300"
                      }`}
                    />
                  </button>
                ))}
                {newTestimonial.rating > 0 && (
                  <span className="ml-2 text-slate-600 self-center">
                    {newTestimonial.rating}{" "}
                    {newTestimonial.rating === 1 ? "star" : "stars"}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm md:text-md lg:text-lg text-slate-700 mb-2">
                Your Testimonial *
              </label>
              <textarea
                value={newTestimonial.comment}
                onChange={(e) =>
                  setNewTestimonial({
                    ...newTestimonial,
                    comment: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-slate-300 text-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your testimonial here..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto text-sm md:text-md lg:text-lg px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              Submit
              <Send className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-md md:text-lg lg:text-xl text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-sm md:text-md lg:text-lg text-emerald-50 mb-8 max-w-2xl mx-auto">
            Book your first appointment today and take the first step towards
            better health, improved movement, and a more balanced life.
          </p>
          <button
            onClick={() => onNavigate("booking")}
            className="px-8 py-4 bg-white text-sm md:text-md lg:text-lg text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
          >
            Schedule Your Appointment
            <ArrowRight className="w-3 h-3 md:w-5 md:h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2025 GF-Kin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
