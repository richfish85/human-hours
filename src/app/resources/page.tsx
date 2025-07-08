import { ResourceTile } from '@/components/dummies';

const links = [
  { name: 'Beyond Blue (AU)', url: 'https://www.beyondblue.org.au' },
  { name: 'Fair Work Ombudsman', url: 'https://www.fairwork.gov.au' },
  { name: 'Lifeline International', url: 'https://www.lifeline.org.au' },
  { name: 'ILO Working Time Hub', url: 'https://workingtime.ilo.org' },
];

export default function ResourcesPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Resources</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {links.map(r => (
          <ResourceTile key={r.url} {...r} />
        ))}
      </div>
    </section>
  );
}
