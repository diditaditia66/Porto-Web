import { NextResponse } from "next/server";
import projects from "@/data/projects.json";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json(projects);
}
