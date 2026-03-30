import type { TimelineItem } from "@/src/data/profile";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative border-l light-line pl-6">
      {items.map((item) => (
        <li key={`${item.year}-${item.title}`} className="mb-10 last:mb-0">
          <div className="-left-[7px] absolute mt-1.5 h-3.5 w-3.5 rounded-full border light-line bg-paper" />
          <div className="text-xs font-medium tracking-[0.14em] text-ink/55">{item.year}</div>
          <div className="mt-2 font-serif text-2xl text-ink">{item.title}</div>
          <p className="mt-2 text-sm leading-7 text-ink/70">{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
