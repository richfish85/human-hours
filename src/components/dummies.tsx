export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col rounded-xl bg-white p-6 shadow-md dark:bg-surface.dark">
      <span className="text-3xl font-bold text-brand">{value}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
    </div>
  );
}

export function NewsCard({ title, source, date }: { title: string; source: string; date: string }) {
  return (
    <article className="space-y-2 rounded-xl border p-4 hover:shadow-md dark:border-gray-600">
      <h3 className="font-semibold leading-tight">{title}</h3>
      <div className="text-xs text-gray-500 dark:text-gray-400">
        {source} · {date}
      </div>
    </article>
  );
}

export function StoryCard({ title, by, excerpt }: { title: string; by: string; excerpt: string }) {
  return (
    <article className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-md dark:bg-surface.dark">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">{excerpt}</p>
      <span className="mt-auto text-xs italic text-gray-400">— {by}</span>
    </article>
  );
}

export function ResourceTile({ name, url }: { name: string; url: string }) {
  return (
    <a
      href={url}
      className="block rounded-lg border p-4 text-center transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-600"
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </a>
  );
}

export function ActionCard({ action, why }: { action: string; why: string }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md dark:bg-surface.dark">
      <span className="block text-brand">{action}</span>
      <p className="text-sm text-gray-600 dark:text-gray-300">{why}</p>
    </div>
  );
}
