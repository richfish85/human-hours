const principles = [
  'Life is not an output metric.',
  'Rest is a right, not a reward.',
  'Working hours must fit inside a human-sized day.',
  'Right to disconnect after clock-out.',
  'Burnout is an occupational hazard—treat it systemically.',
  'Data beats dogma: publish the numbers.',
  'Families count as stakeholders.',
  'Do fewer things, obsess over quality.',
  'Better work beats more work.',
  'Nobody gets left behind—adaptive lanes for neurodivergence.',
];

export default function ManifestoPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">The Human Hours Manifesto</h1>
      <ol className="space-y-2 pl-5">
        {principles.map((p, i) => (
          <li key={p} id={`p${i + 1}`} className="list-decimal marker:text-brand">
            {p}
          </li>
        ))}
      </ol>
    </section>
  );
}
