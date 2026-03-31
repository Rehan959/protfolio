import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full py-[120px] flex items-center justify-center px-6" id = "contact">
      <div className="flex flex-col items-center gap-10 text-center max-w-3xl mx-auto">
        <h2 className="font-semibold tracking-tight" style={{ fontSize: "64px" }}>
          Let&apos;s talk!
        </h2>

        <p className="text-[#A1A1AA] text-lg max-w-xl leading-relaxed">
          Have a project in mind? I&apos;d love to hear about it. Let&apos;s build something great together.
        </p>

        <a
          href="mailto:hello@joey.co"
          className="group focus:outline-none mt-4"
          aria-label="Send email to hello@joey.co"
        >
          <Button
            variant="secondary"
            className="
              text-lg font-medium
              bg-[#111111] text-white
              hover:bg-[#1a1a1a]
              transition-all duration-300
              flex items-center gap-3
            "
            style={{
              padding: "16px 32px",
              borderRadius: "999px",
            }}
          >
            hello@joey.co
            <ArrowUpRight
              className="
                h-5 w-5
                transition-transform duration-300
                group-hover:translate-x-1 group-hover:-translate-y-1
              "
            />
          </Button>
        </a>
      </div>
    </section>
  );
}
