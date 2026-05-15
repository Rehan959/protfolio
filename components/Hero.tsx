export function Hero() {
  return (
    <section className="relative flex min-h-screen w-full items-center px-6 pt-20 md:px-10 md:pt-24">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-16 md:grid-cols-2">
        <div className="flex flex-col justify-center gap-8">
          <h1 className="max-w-[600px] text-5xl font-semibold leading-[1.05] -tracking-tight md:text-7xl lg:text-[88px]">
            Building Products that{" "}
            <span className="italic underline text-4xl md:text-5xl lg:text-6xl">
              matter
            </span>
          </h1>
        </div>

        <div className="flex flex-col justify-end gap-8 md:items-end">
          <p className="max-w-[400px] text-base leading-relaxed text-[#A1A1AA] md:text-right">
            I design and ship products that solve meaningful problems. 
            Focused on React, Node.js, and modern web technologies, 
            I’m currently building data-driven tools that help people make better decisions.
          </p>
          <div className="inline-flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-sm font-medium text-white">
            SCROLL DOWN <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}