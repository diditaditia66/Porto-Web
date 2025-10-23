import Link from "next/link";

export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">
        Hi, I build things. 👋
      </h1>
      <p className="text-lg opacity-80">
        This is a starter portfolio on AWS Amplify + Next.js. Add your bio, skills, and links.
      </p>
      <div className="flex gap-3">
        <Link href="/projects" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">View Projects</Link>
        <Link href="/demos" className="rounded-xl border px-4 py-2 hover:bg-neutral-100 dark:hover:bg-neutral-900">Live Demos</Link>
      </div>
    </section>
  );
}
