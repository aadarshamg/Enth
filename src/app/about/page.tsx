import { BadgeCheck, Globe2, Leaf, Sparkles } from "lucide-react";
import { PageHero } from "@/components/ui";

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="A marketplace designed to scale cultural craft with dignity." text="ETHNOVERA GLOBAL connects small workshops and local artisans with buyers seeking authentic handmade pieces and transparent provenance." />
      <section className="mx-auto grid max-w-7xl gap-5 px-4 pb-16 sm:px-6 md:grid-cols-4 lg:px-8">
        {[
          [BadgeCheck, "Authenticity-first verification"],
          [Globe2, "Worldwide premium discovery"],
          [Leaf, "Sustainable production stories"],
          [Sparkles, "Luxury shopping experience"]
        ].map(([Icon, title]) => (
          <div key={title as string} className="glass rounded-[1.5rem] p-6 shadow-luxe">
            <Icon className="text-gold" />
            <h2 className="mt-5 font-serif text-2xl font-semibold text-ink dark:text-ivory">{title as string}</h2>
          </div>
        ))}
      </section>
    </>
  );
}
