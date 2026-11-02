export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">{eyebrow}</p>
      <h1 className="text-3xl font-extrabold tracking-tight text-navy-900 md:text-4xl">{title}</h1>
      <p className="mt-3 text-sm leading-6 text-slate-500 md:text-base">{description}</p>
    </div>
  );
}
