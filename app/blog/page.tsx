import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const blogPosts = [
  {
    id: 1,
    slug: "future-of-web-development-2025",
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring the latest trends and technologies that are reshaping how we build for the web, from AI-assisted coding to edge computing.",
    date: "2025-05-01",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    id: 2,
    slug: "building-scalable-nextjs-applications",
    title: "Building Scalable Next.js Applications",
    excerpt: "A comprehensive guide to architecting large-scale applications with Next.js, covering performance, caching, and best practices.",
    date: "2025-04-15",
    readTime: "12 min read",
    category: "Development",
  },
  {
    id: 3,
    slug: "mastering-typescript-generics",
    title: "Mastering TypeScript Generics",
    excerpt: "Deep dive into TypeScript generics and how they can make your code more reusable and type-safe.",
    date: "2025-03-28",
    readTime: "10 min read",
    category: "Code",
  },
  {
    id: 4,
    slug: "design-systems-for-developers",
    title: "Design Systems for Developers",
    excerpt: "How to build and maintain a design system that bridges the gap between design and development teams.",
    date: "2025-03-10",
    readTime: "7 min read",
    category: "Design",
  },
  {
    id: 5,
    slug: "api-design-best-practices",
    title: "API Design Best Practices",
    excerpt: "Creating robust and intuitive APIs that developers love to use, with examples from real-world applications.",
    date: "2025-02-22",
    readTime: "9 min read",
    category: "Backend",
  },
  {
    id: 6,
    slug: "performance-optimization-techniques",
    title: "Performance Optimization Techniques",
    excerpt: "Practical tips and tricks to make your web applications blazingly fast.",
    date: "2025-02-05",
    readTime: "11 min read",
    category: "Performance",
  },
];

const categories = ["All", "Technology", "Development", "Code", "Design", "Backend", "Performance"];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] w-full items-center px-6 md:px-10 pt-32 pb-16">
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-12">
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[1.05] -tracking-tight">
              Blog
            </h1>
            <p className="text-lg md:text-xl text-[#A1A1AA] max-w-[600px] leading-relaxed">
              Thoughts on web development, software architecture, and the future of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="px-6 md:px-10 pb-12">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#71717A]" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full md:w-[320px] bg-[#111111] border border-[#222222] rounded-full py-3 pl-12 pr-4 text-[15px] text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#333333] transition-colors"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    category === "All"
                      ? "bg-white text-black"
                      : "bg-[#111111] text-[#A1A1AA] border border-[#222222] hover:border-[#333333] hover:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-[#111111] border border-[#222222] rounded-3xl p-6 transition-all duration-300 hover:border-[#333333] hover:bg-[#1a1a1a]"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-[#71717A] bg-[#222222] px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#71717A] transition-transform duration-300 group-hover:translate-x-1" />
                </div>

                <h2 className="text-xl font-semibold mb-3 leading-tight group-hover:text-white transition-colors">
                  {post.title}
                </h2>

                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-4 text-xs text-[#71717A]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="bg-[#111111] border border-[#222222] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Subscribe to the newsletter
            </h2>
            <p className="text-[#A1A1AA] mb-8 max-w-[500px] mx-auto">
              Get the latest articles and insights delivered to your inbox. No spam, unsubscribe anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-[450px] mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-[#000000] border border-[#222222] rounded-full py-3 px-5 text-[15px] text-white placeholder:text-[#71717A] focus:outline-none focus:border-[#333333] transition-colors"
              />
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-8 py-3 font-medium">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}