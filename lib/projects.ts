// lib/projects.ts
import { z } from "zod";

export const ProjectSchema = z.object({
  id: z.union([z.number(), z.string()]),   // id kamu number, tapi fleksibel
  title: z.string(),
  summary: z.string(),
  stack: z.array(z.string()).default([]),  // mis. ["React", "Flask", ...]
  github: z.string().url().optional(),     // URL repo
  demo: z.string().url().nullable().optional(), // URL demo atau null
});

export const ProjectsSchema = z.array(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;

/** Opsional: validasi array project sebelum dipakai */
export function parseProjects(raw: unknown): Project[] {
  const parsed = ProjectsSchema.safeParse(raw);
  if (!parsed.success) {
    console.warn("[projects] invalid data:", parsed.error.flatten());
    return [];
  }
  return parsed.data;
}
