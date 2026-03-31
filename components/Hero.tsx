export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center px-6 md:px-10 pt-20 md:pt-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-16 md:grid-cols-2 items-center">
        <div className="flex flex-col justify-center gap-8">
          <h1
            className="text-[88px] font-semibold leading-[1.05] tracking-[-1px] max-w-[600px]"
            style={{ letterSpacing: "-1px" }}
          >
            Building Web
            <br />
            Products & Systems
          </h1>

          <div className="flex flex-col gap-1 mt-2">
            <p className="text-sm font-medium text-white/50">Let&apos;s Build</p>
            <p className="text-sm text-[#A1A1AA]">
              rehan@yourdomain.com
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-end gap-8 md:items-end">
          <p className="max-w-[400px] text-base leading-relaxed text-[#A1A1AA] md:text-right">
            Hey, I&apos;m Rehan, a full-stack developer crafting fast, scalable,
            and user-focused web applications. I specialize in modern
            frontend frameworks, robust backends, and clean system design.
          </p>

          <div
            className="inline-flex items-center gap-2 text-sm font-medium text-white"
            style={{
              background: "#111111",
              padding: "16px 24px",
              borderRadius: "999px",
            }}
          >
            SCROLL DOWN <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
