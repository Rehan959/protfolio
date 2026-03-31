import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#222222] bg-[#000000]">
      <div className="max-w-[1200px] mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-center text-[14px] text-[#71717A]">
            &copy; {new Date().getFullYear()} Rehan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#71717A] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] text-[#71717A] hover:text-white transition-colors inline-flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#"
              className="text-[14px] text-[#71717A] hover:text-white transition-colors"
            >
              Unstop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
