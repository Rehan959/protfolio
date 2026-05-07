import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPost = {
  title: "The Future of Web Development in 2025",
  excerpt: "Exploring the latest trends and technologies that are reshaping how we build for the web, from AI-assisted coding to edge computing.",
  date: "2025-05-01",
  readTime: "8 min read",
  category: "Technology",
  content: `
    <p>The web development landscape is evolving at an unprecedented pace. As we look ahead to 2025, several key trends are poised to fundamentally reshape how we build for the web.</p>

    <h2>AI-Assisted Development</h2>
    <p>Artificial intelligence is no longer just a tool—it's becoming a co-developer. From code generation to automated testing, AI is streamlining every aspect of the development workflow. Tools like GitHub Copilot and Claude are just the beginning.</p>

    <h2>Edge Computing Revolution</h2>
    <p>The edge is becoming the new center. With frameworks like Cloudflare Workers and Vercel Edge, we're seeing a shift from centralized server architectures to distributed edge networks that deliver unparalleled performance.</p>

    <h2>The Rise of Rust in Web Infrastructure</h2>
    <p>Rust is making significant inroads in web development. From bundlers like Turbopack to serverless runtimes, Rust's performance and safety guarantees are attracting more developers to the ecosystem.</p>

    <h2>What This Means for Developers</h2>
    <p>The skills that matter are evolving. Understanding distributed systems, AI tooling, and performance optimization will be more valuable than ever. The role of the developer is shifting from code writer to systems architect.</p>

    <h2>Conclusion</h2>
    <p>The future of web development is exciting. As these technologies mature, we'll build faster, more reliable, and more intelligent applications than ever before. The key is to stay adaptable and keep learning.</p>
  `,
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-[#000000]">
      {/* Header */}
      <section className="px-6 md:px-10 pt-32 pb-12">
        <div className="mx-auto max-w-[800px]">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back to Blog</span>
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs font-medium text-[#71717A] bg-[#222222] px-3 py-1 rounded-full">
              {blogPost.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#71717A]">
              <Calendar className="h-3 w-3" />
              {new Date(blogPost.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-[#71717A]">
              <Clock className="h-3 w-3" />
              {blogPost.readTime}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.1] -tracking-tight mb-6">
            {blogPost.title}
          </h1>

          <p className="text-xl text-[#A1A1AA] leading-relaxed mb-8">
            {blogPost.excerpt}
          </p>

          <div className="flex items-center gap-3 pb-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#222222] text-[#A1A1AA] hover:text-white hover:border-[#333333] hover:bg-[#111111]"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-[#222222] text-[#A1A1AA] hover:text-white hover:border-[#333333] hover:bg-[#111111]"
            >
              <Bookmark className="h-4 w-4" />
            </Button>
          </div>

          <div className="h-px bg-[#222222] mb-12" />
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[800px]">
          <article
            className="prose prose-invert prose-lg max-w-none
              prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-white
              prose-p:text-[#A1A1AA] prose-p:leading-relaxed prose-p:mb-6
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:text-white
              prose-strong:text-white
              prose-code:bg-[#111111] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-white prose-code:border prose-code:border-[#222222]
              prose-pre:bg-[#111111] prose-pre:border prose-pre:border-[#222222]
              prose-a:text-white prose-a:underline prose-a:underline-offset-4 prose-a:decoration-[#333333] hover:prose-a:decoration-white
              prose-blockquote:border-l-[#333333] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#A1A1AA]"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </section>

      {/* More Articles */}
      <section className="px-6 md:px-10 pb-24">
        <div className="mx-auto max-w-[800px]">
          <div className="h-px bg-[#222222] mb-12" />

          <h2 className="text-2xl font-semibold mb-8">More Articles</h2>

          <div className="grid gap-6">
            <Link
              href="/blog/building-scalable-nextjs-applications"
              className="group block bg-[#111111] border border-[#222222] rounded-2xl p-6 transition-all duration-300 hover:border-[#333333] hover:bg-[#1a1a1a]"
            >
              <span className="text-xs font-medium text-[#71717A] bg-[#222222] px-3 py-1 rounded-full">
                Development
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-white transition-colors">
                Building Scalable Next.js Applications
              </h3>
              <p className="text-sm text-[#A1A1AA]">
                A comprehensive guide to architecting large-scale applications with Next.js.
              </p>
            </Link>

            <Link
              href="/blog/mastering-typescript-generics"
              className="group block bg-[#111111] border border-[#222222] rounded-2xl p-6 transition-all duration-300 hover:border-[#333333] hover:bg-[#1a1a1a]"
            >
              <span className="text-xs font-medium text-[#71717A] bg-[#222222] px-3 py-1 rounded-full">
                Code
              </span>
              <h3 className="text-lg font-semibold mt-3 mb-2 group-hover:text-white transition-colors">
                Mastering TypeScript Generics
              </h3>
              <p className="text-sm text-[#A1A1AA]">
                Deep dive into TypeScript generics and how they can make your code more reusable.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}