import {
  Activity,
  Brain,
  Dumbbell,
  Heart,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

type Page = "home" | "services" | "booking";

interface ServicesPageProps {
  onNavigate: (page: Page) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Activity,
      title: "Muscle Testing & Assessment",
      duration: "60 minutes",
      price: "$90",
      description:
        "Comprehensive muscle testing to identify imbalances, weaknesses, and blockages in your body's energy systems. Includes detailed assessment and personalized recommendations.",
      benefits: [
        "Identify energy blockages",
        "Assess structural imbalances",
        "Detect nutritional deficiencies",
        "Evaluate stress responses",
      ],
    },
    {
      icon: Dumbbell,
      title: "Movement Therapy",
      duration: "75 minutes",
      price: "$110",
      description:
        "Personalized movement and exercise therapy designed to correct imbalances, improve mobility, and enhance overall physical function.",
      benefits: [
        "Improve range of motion",
        "Strengthen weak muscle groups",
        "Correct postural issues",
        "Reduce pain and discomfort",
      ],
    },
    {
      icon: Brain,
      title: "Stress & Emotional Balance",
      duration: "60 minutes",
      price: "$90",
      description:
        "Address emotional and psychological stressors through specialized kinesiology techniques that restore balance to your nervous system.",
      benefits: [
        "Reduce anxiety and stress",
        "Improve emotional resilience",
        "Release trapped emotions",
        "Enhance mental clarity",
      ],
    },
    {
      icon: Zap,
      title: "Energy Balancing",
      duration: "60 minutes",
      price: "$90",
      description:
        "Restore optimal energy flow throughout your body using meridian therapy and energy balancing techniques.",
      benefits: [
        "Boost vitality and energy",
        "Balance chakras and meridians",
        "Enhance overall wellbeing",
        "Improve sleep quality",
      ],
    },
    {
      icon: Heart,
      title: "Pain Management",
      duration: "75 minutes",
      price: "$110",
      description:
        "Comprehensive approach to managing chronic pain through kinesiology, addressing both physical and energetic causes.",
      benefits: [
        "Reduce chronic pain",
        "Identify pain triggers",
        "Natural pain relief techniques",
        "Long-term management strategies",
      ],
    },
    {
      icon: Users,
      title: "Sports Performance",
      duration: "90 minutes",
      price: "$130",
      description:
        "Optimize athletic performance through specialized testing, movement analysis, and performance enhancement techniques.",
      benefits: [
        "Enhance athletic performance",
        "Prevent sports injuries",
        "Improve recovery time",
        "Optimize training programs",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter Package",
      sessions: "3 Sessions",
      price: "$250",
      savings: "Save $20",
      description:
        "Perfect for trying kinesiology and experiencing initial results.",
    },
    {
      name: "Wellness Package",
      sessions: "6 Sessions",
      price: "$480",
      savings: "Save $60",
      description:
        "Ideal for addressing specific health goals with consistent care.",
      popular: true,
    },
    {
      name: "Transformation Package",
      sessions: "10 Sessions",
      price: "$750",
      savings: "Save $150",
      description:
        "Comprehensive program for deep healing and lasting transformation.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-slate-900 mb-6">Kinesiology Services</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore my range of specialized kinesiology services designed to
            support your journey towards optimal health, wellness, and vitality.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-100">
                      <Icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-slate-900">{service.price}</div>
                      <div className="text-slate-500 text-sm">
                        {service.duration}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="text-slate-700 text-sm mb-2">
                      Key Benefits:
                    </div>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, idx) => (
                        <li
                          key={idx}
                          className="text-slate-600 text-sm flex items-start gap-2"
                        >
                          <span className="text-emerald-600 mt-1">•</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Package Pricing */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-slate-900 mb-4">Package Pricing</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Save money and commit to your wellness journey with our discounted
              multi-session packages.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 ${
                  pkg.popular
                    ? "ring-2 ring-emerald-600 shadow-xl"
                    : "border border-slate-200"
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block px-3 py-1 bg-emerald-600 text-white text-sm rounded-full mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-slate-900 mb-2">{pkg.name}</h3>
                <div className="text-slate-600 mb-4">{pkg.sessions}</div>
                <div className="text-slate-900 mb-2">{pkg.price}</div>
                <div className="text-emerald-600 mb-6">{pkg.savings}</div>
                <p className="text-slate-600 mb-6">{pkg.description}</p>
                <button
                  onClick={() => onNavigate("booking")}
                  className={`w-full py-3 rounded-lg transition-colors ${
                    pkg.popular
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-slate-900 mb-4">What to Expect</h2>
            <p className="text-slate-600">
              Your first kinesiology session and what happens during treatment.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                1
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Initial Consultation</h3>
                <p className="text-slate-600">
                  We'll discuss your health history, current concerns, and
                  wellness goals to create a personalized treatment plan.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                2
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Assessment & Testing</h3>
                <p className="text-slate-600">
                  Using muscle testing and other kinesiology techniques, I'll
                  identify imbalances and areas that need attention.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                3
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Treatment & Balancing</h3>
                <p className="text-slate-600">
                  I'll use a variety of techniques to restore balance, including
                  energy work, movement therapy, and stress release methods.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-600">
                4
              </div>
              <div>
                <h3 className="text-slate-900 mb-2">Follow-up Plan</h3>
                <p className="text-slate-600">
                  You'll receive personalized recommendations for exercises,
                  lifestyle changes, and a plan for ongoing care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-white mb-6">Ready to Book Your Session?</h2>
          <p className="text-emerald-50 mb-8 max-w-2xl mx-auto">
            Take the first step towards better health and wellness. Book your
            appointment today and start your transformation.
          </p>
          <button
            onClick={() => onNavigate("booking")}
            className="px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors inline-flex items-center gap-2"
          >
            Book Your Appointment
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
