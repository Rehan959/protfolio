export default function LoopingText() {
  const texts = [
    "Visual design for digital experiences",
    "Building accessible web applications",
    "Full-stack development",
    "Performance optimization",
    "Creative coding",
  ];

  return (
    <div className="relative w-full overflow-hidden py-8">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

      <div className="flex w-max animate-marquee gap-16" style={{ opacity: 0.1 }}>
        {[...texts, ...texts, ...texts].map((text, i) => (
          <span
            key={i}
            className="text-white font-semibold whitespace-nowrap"
            style={{ fontSize: "120px", fontWeight: 600 }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
