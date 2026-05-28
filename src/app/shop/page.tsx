import { FilterPanel, PageHero, ProductMasonry, SearchDock } from "@/components/ui";

export default function ShopPage() {
  return (
    <>
      <PageHero eyebrow="Marketplace" title="Shop verified handmade luxury from around the world." text="Filter by price, craft type, region, material, color, ratings, and availability in a masonry marketplace built for discovery." />
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <SearchDock />
      </section>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[290px_1fr] lg:px-8">
        <FilterPanel />
        <div>
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-sm font-semibold text-walnut dark:text-sand">2,418 curated artisan products</p>
            <select aria-label="Sort products" className="rounded-full border border-gold/25 bg-white/70 px-5 py-3 text-sm text-walnut outline-none dark:bg-white/10 dark:text-sand">
              <option>Sort by recommended</option>
              <option>Price: low to high</option>
              <option>Highest rated</option>
              <option>Newest arrivals</option>
            </select>
          </div>
          <ProductMasonry />
        </div>
      </section>
    </>
  );
}
