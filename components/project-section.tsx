import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    name: "TaskFlow Pro",
    type: "Full Stack Web App",
    image: "https://placehold.co/600x400",
    bgColor: "bg-purple-500",
  },
  {
    name: "DevMarket",
    type: "E-commerce Platform",
    image: "https://placehold.co/600x400",
    bgColor: "bg-lime-400",
  },
  {
    name: "HealthTrack",
    type: "Mobile App & Dashboard",
    image: "https://placehold.co/600x400",
    bgColor: "bg-blue-500",
  },
  {
    name: "EventSphere",
    type: "Social Networking App",
    image: "https://placehold.co/600x400",
    bgColor: "bg-orange-400",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-[120px] px-6 max-w-[1200px] mx-auto" id="projects">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h2 className="text-[40px] font-semibold mb-2">Projects</h2>
          <p className="text-[#A1A1AA] max-w-md text-[16px] leading-[1.6]">
            As an experienced developer of modern, intuitive websites and digital products,
            I want to help you build the brand of your dreams.
          </p>
        </div>
        <Button variant="link" className="shrink-0 text-[#A1A1AA]">
          More &rarr;
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="overflow-hidden group cursor-pointer bg-transparent border-[#222222] rounded-3xl"
          >
            <div className={`${project.bgColor} relative overflow-hidden h-[260px]`}>
              {/*<Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />*/}
            </div>
            <CardContent className="pt-4 px-6 pb-6">
              <CardTitle className="text-[18px] font-semibold">{project.name}</CardTitle>
              <p className="text-[14px] text-[#71717A] mt-1">{project.type}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
