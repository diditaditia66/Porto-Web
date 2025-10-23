import data from "@/data/projects.json";
import ProjectCard from "@/components/ProjectCard";

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Proyek Saya</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}
