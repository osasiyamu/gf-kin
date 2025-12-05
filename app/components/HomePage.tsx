import { useState } from "react";
import { Heart, Users, Award, ArrowRight, Star, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Page = "home" | "services" | "booking";

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

interface Testimonial {
  id: number;
  name: string;
  service: string;
  rating: number;
  comment: string;
  date: string;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([
    {
      id: 1,
      name: "Sarah Mitchell",
      service: "Movement Therapy",
      rating: 5,
      comment:
        "After just three sessions, my chronic back pain has significantly improved. The personalized approach really made a difference!",
      date: "November 2024",
    },
    {
      id: 2,
      name: "James Rodriguez",
      service: "Stress & Emotional Balance",
      rating: 5,
      comment:
        "I was skeptical at first, but the results speak for themselves. I feel more balanced and energized than I have in years.",
      date: "October 2024",
    },
    {
      id: 3,
      name: "Emily Chen",
      service: "Sports Performance",
      rating: 5,
      comment:
        "As an athlete, finding GF-Kin was a game-changer. My performance has improved dramatically and recovery time is much faster.",
      date: "November 2024",
    },
    {
      id: 4,
      name: "Michael Thompson",
      service: "Muscle Testing",
      rating: 4,
      comment:
        "Great experience! The assessment was thorough and I learned so much about my body. Highly recommend.",
      date: "December 2024",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      service: "Pain Management",
      rating: 5,
      comment:
        "Life-changing! I've tried everything for my joint pain, and kinesiology has been the most effective treatment by far.",
      date: "December 2024",
    },
    {
      id: 6,
      name: "David Kim",
      service: "Energy Balancing",
      rating: 5,
      comment:
        "Amazing sessions! I feel more centered and my overall wellbeing has improved tremendously. Thank you!",
      date: "November 2024",
    },
  ]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    service: "",
    rating: 0,
    comment: "",
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    const testimonial: Testimonial = {
      id: testimonials.length + 1,
      ...newTestimonial,
      date: "Just now",
    };
    setTestimonials([testimonial, ...testimonials]);
    setNewTestimonial({ name: "", service: "", rating: 0, comment: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };
  const features = [
    {
      icon: Heart,
      title: "Holistic Approach",
      description:
        "Treating the whole person, not just symptoms, for lasting wellness and balance.",
    },
    {
      icon: Users,
      title: "Personalized Care",
      description:
        "Custom treatment plans tailored to your unique needs and health goals.",
    },
    {
      icon: Award,
      title: "Expert Experience",
      description:
        "Certified kinesiology practitioner with years of experience in movement therapy.",
    },
  ];

  const services = [
    {
      title: "Muscle Testing",
      description:
        "Identify imbalances and blockages in your body's energy systems.",
      image:
        "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc2NDc3Njk5NHww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Movement Therapy",
      description:
        "Corrective exercises to improve mobility, strength, and overall function.",
      image:
        "https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NjQ3MDI4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      title: "Stress Management",
      description: "Techniques to reduce stress and restore emotional balance.",
      image:
        "https://images.unsplash.com/photo-1740350631565-6a5081a2f841?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHdlbGxuZXNzJTIwc3BhfGVufDF8fHx8MTc2NDc3Njk5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4 sm:py-20 sm:px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-snug">
              Restore Balance.
              <br />
              Enhance Movement.
              <br />
              Live Better.
            </h1>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Welcome to GF-Kin, where I combine the art and science of
              kinesiology to help you achieve optimal health and wellness.
              Through personalized assessment and treatment, I'll guide you on
              your journey to better movement, reduced pain, and improved
              quality of life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate("booking")}
                className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
              >
                Book Your Session
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate("services")}
                className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors flex items-center justify-center"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
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
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              What I Do
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Kinesiology is a holistic approach to health that uses muscle
              testing to identify imbalances in the body's energy systems. I
              work with you to restore balance and promote natural healing.
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
                  <p className="text-slate-600 text-sm sm:text-base">
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
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Featured Services
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
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
                  <h3 className="text-slate-900 mb-1 sm:mb-2 font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <button
              onClick={() => onNavigate("services")}
              className="px-6 py-3 sm:px-8 sm:py-4 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors inline-flex items-center gap-2"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Read what my clients have to say about their experiences and
              results.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200"
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
                <p className="text-slate-600 mb-4">{testimonial.comment}</p>
                <div className="text-slate-400 text-sm">{testimonial.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Testimonial Section */}
      <section className="py-16 px-4 sm:py-20 sm:px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Share Your Experience
            </h2>
            <p className="text-slate-600">
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
                <label className="block text-slate-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  value={newTestimonial.name}
                  onChange={(e) =>
                    setNewTestimonial({
                      ...newTestimonial,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-700 mb-2">
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
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
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
              <label className="block text-slate-700 mb-2">Your Rating *</label>
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
              <label className="block text-slate-700 mb-2">
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
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Write your testimonial here..."
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2"
            >
              Submit
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Book your first appointment today and take the first step towards
            better health, improved movement, and a more balanced life.
          </p>
          <button
            onClick={() => onNavigate("booking")}
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
          >
            Schedule Your Appointment
            <ArrowRight className="w-5 h-5" />
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
