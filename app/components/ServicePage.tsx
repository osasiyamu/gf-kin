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
      icon: Brain,
      title: "Initial Assessment",
      duration: "75 minutes",
      price: "$95",
      description:
        "Comprehensive intake including movement screening, injury history, postural assessment, goal setting, and personalized plan development.",
      benefits: [],
    },
    {
      icon: Activity,
      title: "In-Home Kinesiology Session",
      duration: "60 minutes",
      price: "$80",
      description:
        "A full session focused on rehab, strength training, mobility, or functional living goals. Includes a mental/emotional readiness consultation.",
      benefits: [],
    },
    {
      icon: Dumbbell,
      title: "In-Home Kinesiology Session",
      duration: "90 minutes",
      price: "$110",
      description:
        "Ideal for complex rehab needs, progressive strength training, or sessions requiring both physical work and deeper emotional support.",
      benefits: [],
    },
    {
      icon: Zap,
      title: "Progress Review",
      duration: "30 minutes (Add-On)",
      price: "$40",
      description:
        "Optional check-ins for clients wanting quicker reassessments, exercise program updates, or emotional regulation support.",
      benefits: [],
    },
  ];

  const packages = [
    {
      name: "Strength or Rehab Package",
      sessions: "5 Sessions",
      price: "$375",
      savings: "Save $25",
      description:
        "For clients wanting consistent progress and a structured plan.",
    },
    {
      name: "Mobility & Performance Package",
      sessions: "10 Sessions",
      price: "$740",
      savings: "Save $60",
      description:
        "Best for long-term rehab, aging support, or full strength cycles.",
      popular: true,
    },
    {
      name: "Functional Living Program",
      sessions: "12 Sessions",
      price: "$920",
      savings: "Save $140",
      description:
        "Weekly sessions supporting aging clients, disabilities, and independent ADLs",
      popular: true,
    },
    {
      name: "Accountability Add-On",
      sessions: "12 Sessions",
      price: "$20",
      savings: "weekly",
      description:
        "Includes text check-ins, habit support, and personalized home exercises",
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-slate-400 rounded-xl p-6 hover:shadow-lg transition-shadow"
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

                  {/* <div className="border-t border-slate-200 pt-4">
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
                  </div> */}
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

          <div className="grid md:grid-cols-4 gap-8">
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
                <footer className="">
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
                </footer>
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
