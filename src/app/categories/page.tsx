import { CategoryGrid, PageHero } from "@/components/ui";

export default function CategoriesPage() {
  return (
    <>
      <PageHero eyebrow="Categories" title="Browse by craft, room, ritual, and material." text="A clean category experience for decor, ceramics, textiles, jewelry, traditional fashion, collectibles, and seasonal edits." />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <CategoryGrid />
      </section>
    </>
  );
}
