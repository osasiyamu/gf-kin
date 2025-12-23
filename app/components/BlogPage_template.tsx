import { useState } from "react";
import { Calendar, Clock, Tag, Search, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Understanding Kinesiology: A Holistic Approach to Wellness",
      excerpt:
        "Discover how kinesiology uses muscle testing to identify imbalances and promote natural healing in your body.",
      content:
        "Kinesiology is a holistic health discipline that combines Western techniques and Eastern wisdom to assess energy and body function, adapting gentle yet powerful corrections to improve health and wellbeing. The practice involves muscle testing as a primary feedback mechanism...",
      image:
        "https://images.unsplash.com/photo-1546553836-33b20490e87e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGhlYWx0aCUyMGJsb2d8ZW58MXx8fHwxNzY0Nzc4NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "GF-Kin",
      date: "December 1, 2024",
      readTime: "5 min read",
      category: "Kinesiology Basics",
    },
    {
      id: 2,
      title: "5 Signs Your Body Needs Energy Balancing",
      excerpt:
        "Learn to recognize the signs that indicate your body's energy systems are out of balance and how kinesiology can help.",
      content:
        "Our bodies are constantly communicating with us through various signals. When our energy systems are imbalanced, we may experience fatigue, emotional stress, physical discomfort, digestive issues, or sleep disturbances. Kinesiology offers powerful techniques to restore this balance...",
      image:
        "https://images.unsplash.com/photo-1697563170943-20a56bfa3f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5lc2lvbG9neSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NDc3ODQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "GF-Kin",
      date: "November 28, 2024",
      readTime: "4 min read",
      category: "Energy & Wellness",
    },
    {
      id: 3,
      title: "The Connection Between Stress and Physical Pain",
      excerpt:
        "Explore how emotional stress manifests as physical pain and what you can do about it through kinesiology.",
      content:
        "The mind-body connection is more powerful than most people realize. Chronic stress doesn't just affect our mental health—it can manifest as physical pain, tension, and various health issues. Through kinesiology, we can identify and release these stress patterns...",
      image:
        "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMHRoZXJhcHklMjBtYXNzYWdlfGVufDF8fHx8MTc2NDc3Njk5NHww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "GF-Kin",
      date: "November 25, 2024",
      readTime: "6 min read",
      category: "Pain Management",
    },
    {
      id: 4,
      title: "Nutrition and Kinesiology: Fueling Your Body Right",
      excerpt:
        "Learn how muscle testing can help identify nutritional deficiencies and food sensitivities for optimal health.",
      content:
        "Proper nutrition is fundamental to health and wellbeing. Through kinesiology muscle testing, we can identify which foods support your body and which ones may be causing problems. This personalized approach to nutrition can transform your energy levels and overall health...",
      image:
        "https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZHxlbnwxfHx8fDE3NjQ2ODAxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "GF-Kin",
      date: "November 22, 2024",
      readTime: "5 min read",
      category: "Nutrition",
    },
    {
      id: 5,
      title: "Movement Therapy: Correcting Postural Imbalances",
      excerpt:
        "Discover how targeted movement exercises can correct postural issues and improve overall body function.",
      content:
        "Poor posture is one of the most common causes of chronic pain and dysfunction in modern society. Through kinesiology-based movement therapy, we can identify specific muscle weaknesses and imbalances, then prescribe targeted exercises to restore optimal function...",
      image:
        "https://images.unsplash.com/photo-1634144646738-809a0f8897c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbGlmZXN0eWxlJTIwZml0bmVzc3xlbnwxfHx8fDE3NjQ3MDI4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
      author: "GF-Kin",
      date: "November 20, 2024",
      readTime: "7 min read",
      category: "Movement & Exercise",
    },
    {
      id: 6,
      title: "Enhancing Athletic Performance with Kinesiology",
      excerpt:
        "Athletes can benefit greatly from kinesiology techniques that optimize performance and prevent injuries.",
      content:
        "Whether you're a professional athlete or weekend warrior, kinesiology can help you perform at your best. By identifying muscle imbalances, optimizing energy flow, and addressing biomechanical issues, we can enhance your athletic performance and reduce injury risk...",
      image:
        "https://images.unsplash.com/photo-1697563170943-20a56bfa3f67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraW5lc2lvbG9neSUyMGV4ZXJjaXNlfGVufDF8fHx8MTc2NDc3ODQ0MHww&ixlib=rb-4.1.0&q=80&w=1080",
      author: "GF-Kin",
      date: "November 18, 2024",
      readTime: "6 min read",
      category: "Sports Performance",
    },
  ];

  const categories = [
    "All",
    "Kinesiology Basics",
    "Energy & Wellness",
    "Pain Management",
    "Nutrition",
    "Movement & Exercise",
    "Sports Performance",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  /* ——— No logic changed ——— */

  {
    /* --- POST PAGE --- */
  }
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white">
        {/* Post Header */}
        <div className="relative h-[300px] md:h-[400px] overflow-hidden /* mobile */">
          <ImageWithFallback
            src={selectedPost.image}
            alt={selectedPost.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8 /* mobile */">
            <div className="max-w-4xl mx-auto">
              <button
                onClick={() => setSelectedPost(null)}
                className="text-white hover:text-emerald-400 mb-3 md:mb-4 flex items-center gap-2 text-sm md:text-base /* mobile */"
              >
                ← Back to Blog
              </button>

              <div className="inline-block px-3 py-1 bg-emerald-600 text-white rounded-full text-xs md:text-sm mb-3 /* mobile */">
                {selectedPost.category}
              </div>

              <h1 className="text-white mb-3 text-xl md:text-3xl font-semibold /* mobile */">
                {selectedPost.title}
              </h1>

              <div className="flex flex-wrap gap-3 md:gap-6 text-emerald-100 text-xs md:text-sm /* mobile */">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <article className="py-10 px-4 md:py-16 md:px-4 /* mobile */">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-sm md:prose-lg max-w-none /* mobile */">
              <p className="text-slate-600 text-base md:text-lg mb-6">
                {selectedPost.excerpt}
              </p>

              <p className="text-slate-700 leading-relaxed text-sm md:text-base /* mobile */">
                {selectedPost.content}
              </p>

              <div className="mt-8 p-4 md:p-6 bg-emerald-50 border-l-4 border-emerald-600 rounded-r-lg /* mobile */">
                <p className="text-slate-700 text-sm md:text-base">
                  <strong>Want to learn more?</strong> Book a consultation to
                  discover how kinesiology can help you achieve your goals.
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-12 px-4 bg-slate-50 md:py-16 /* mobile */">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-slate-900 mb-6 md:mb-8 text-xl md:text-2xl /* mobile */">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 /* mobile */">
              {blogPosts
                .filter(
                  (post) =>
                    post.id !== selectedPost.id &&
                    post.category === selectedPost.category
                )
                .slice(0, 3)
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                  >
                    <div className="h-40 md:h-48 overflow-hidden /* mobile */">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4 md:p-6 /* mobile */">
                      <div className="text-emerald-600 text-xs md:text-sm mb-2">
                        {post.category}
                      </div>
                      <h3 className="text-slate-900 mb-2 text-base md:text-lg /* mobile */">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-3 md:mb-4">
                        {post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-3 text-slate-500 text-xs md:text-sm /* mobile */">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        <footer className="bg-slate-900 text-slate-400 py-6 px-4 text-sm md:text-base /* mobile */">
          <div className="max-w-7xl mx-auto text-center">
            <p>&copy; 2025 GF-Kin. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  {
    /* ——— MAIN BLOG LIST PAGE ——— */
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-12 md:py-16 px-3 md:px-4 /* mobile */">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-slate-900 text-3xl md:text-5xl font-semibold mb-4 md:mb-6 /* mobile */">
            Health & Wellness Blog
          </h1>

          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base mb-6 md:mb-8 /* mobile */">
            Explore insights, tips, and expert advice on kinesiology and
            holistic wellness.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 md:py-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 bg-white text-sm md:text-base /* mobile */"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-4 md:py-8 px-3 md:px-4 bg-white border-b border-slate-200 sticky top-16 z-40 /* mobile */">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto no-scrollbar md:flex-wrap justify-start md:justify-center /* mobile */">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm md:text-base transition-colors ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 md:py-16 px-3 md:px-4 bg-white /* mobile */">
        <div className="max-w-7xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-sm md:text-base">
                No articles found matching your search.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 /* mobile */">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                >
                  <div className="h-44 md:h-56 overflow-hidden /* mobile */">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 md:p-6 /* mobile */">
                    <div className="flex items-center gap-2 mb-2 md:mb-3">
                      <Tag className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-600 text-xs md:text-sm">
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-slate-900 mb-2 md:mb-3 text-base md:text-lg /* mobile */">
                      {post.title}
                    </h3>

                    <p className="text-slate-600 text-sm md:text-base mb-3 md:mb-4 /* mobile */">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 md:gap-4 text-slate-500 text-xs md:text-sm /* mobile */">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>

                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-emerald-600 /* mobile */" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
