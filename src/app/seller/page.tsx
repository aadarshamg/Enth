import { BarChart3, MessageCircle, PackageCheck, Plus, Truck } from "lucide-react";
import { PageHero } from "@/components/ui";
import { products, sellerStats } from "@/lib/data";

export default function SellerPage() {
  return (
    <>
      <PageHero eyebrow="Seller Dashboard" title="A premium operating room for artisan sellers." text="Onboarding, product upload, inventory, order tracking, revenue, analytics, and customer chat support in one calm dashboard." />
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {sellerStats.map((stat) => (
            <div key={stat.label} className="glass rounded-[1.5rem] p-5 shadow-luxe">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-terracotta">{stat.label}</p>
              <p className="mt-3 text-3xl font-bold text-ink dark:text-ivory">{stat.value}</p>
              <p className="mt-1 text-sm text-gold">{stat.trend}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass rounded-[2rem] p-6 shadow-luxe">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">Inventory Management</h2>
              <button className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-ivory dark:bg-ivory dark:text-ink">
                <Plus size={16} /> Upload Product
              </button>
            </div>
            <div className="mt-5 grid gap-3">
              {products.slice(0, 5).map((product, index) => (
                <div key={product.id} className="grid gap-3 rounded-2xl bg-white/60 p-4 text-sm text-walnut dark:bg-white/10 dark:text-sand md:grid-cols-[1fr_auto_auto] md:items-center">
                  <span className="font-bold text-ink dark:text-ivory">{product.name}</span>
                  <span>{index % 2 === 0 ? "Ready to ship" : "Made to order"}</span>
                  <span className="rounded-full bg-gold/20 px-3 py-1 font-bold text-terracotta">{24 + index * 8} in stock</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {[
              [PackageCheck, "Seller onboarding checklist", "Business details, craft origin, documents, payout setup."],
              [Truck, "Order tracking", "Live status for packed, shipped, customs, and delivered."],
              [MessageCircle, "Customer chat", "Buyer questions, personalization requests, and post-purchase care."],
              [BarChart3, "Revenue overview", "GMV, commissions, returns, repeat buyers, and traffic sources."]
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="glass rounded-[1.5rem] p-5 shadow-luxe">
                <Icon className="text-gold" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-ink dark:text-ivory">{title as string}</h3>
                <p className="mt-2 text-sm leading-6 text-walnut dark:text-sand">{text as string}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
