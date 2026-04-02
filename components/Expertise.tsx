import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiCss3,
  SiJavascript,
  SiFigma,
  SiMarkdown,
  SiNodedotjs,
  SiExpress,
  SiRedis,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiSupabase,
  SiGit,
  SiGithub,
  SiDocker,
  SiCloudflare,
  SiVercel,
  SiTurborepo,
  SiPython,
  SiLinux,
  SiNeovim,
  SiZod,
} from "react-icons/si";

export default function Expertise() {
  const skills = [
    { icon: SiReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
    { icon: SiCss3, name: "CSS3", color: "#1572B6" },
    { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiFigma, name: "Figma", color: "#F24E1E" },
    { icon: SiMarkdown, name: "Markdown", color: "#FFFFFF" },
    { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#FFFFFF" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPrisma, name: "Prisma", color: "#FFFFFF" },
    { icon: SiSupabase, name: "Supabase", color: "#3EC483" },
    { icon: SiGit, name: "Git", color: "#F05032" },
    { icon: SiGithub, name: "GitHub", color: "#FFFFFF" },
    { icon: SiDocker, name: "Docker", color: "#2496ED" },
    { icon: SiCloudflare, name: "Cloudflare", color: "#F38020" },
    { icon: SiVercel, name: "Vercel", color: "#FFFFFF" },
    { icon: SiTurborepo, name: "Turborepo", color: "#EF4444" },
    { icon: SiPython, name: "Python", color: "#3776AB" },
    { icon: SiLinux, name: "Linux", color: "#FCC624" },
    { icon: SiNeovim, name: "Neovim", color: "#57A143" },
    { icon: SiZod, name: "Zod", color: "#3068B7" },
  ];

  return (
    <section className="py-[120px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <h2 className="text-[40px] font-semibold mb-12 text-white">
          Expertise
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group flex flex-col items-center justify-center p-4 border border-[#222222] bg-[#111111] transition-all duration-300 hover:bg-[#1a1a1a] hover:border-[#333333] hover:scale-105 cursor-pointer rounded-2xl"
                title={skill.name}
              >
                <IconComponent
                  className="text-2xl sm:text-3xl mb-2 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color }}
                />
                <span className="text-xs sm:text-sm text-[#A1A1AA] font-medium">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
