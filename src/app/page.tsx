import Link from 'next/link';

export default function Home() {
  return (
    <section className="space-y-8 text-center">
      <h1 className="text-4xl font-bold">Human Hours</h1>
      <p className="mx-auto max-w-xl text-lg">
        Fresh data, real stories, and practical tools to end death-by-overwork.
      </p>
      <Link
        href="/manifesto"
        className="inline-block rounded-lg bg-brand px-6 py-3 font-medium text-white shadow hover:opacity-90"
      >
        Read the Manifesto
      </Link>
    </section>
  );
}
