import Image from "next/image";
import { CreditCard, Lock, PackageCheck, Truck } from "lucide-react";
import { PageHero } from "@/components/ui";
import { formatInr } from "@/lib/currency";
import { products } from "@/lib/data";

export default function CartPage() {
  const cartItems = products.slice(0, 3);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <PageHero eyebrow="Cart & Checkout" title="A refined cart built for secure global orders." text="Multi-vendor checkout, delivery estimates, payment gateway UI, duties-ready fulfillment, and artisan packaging cues." />
      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[1fr_380px] lg:px-8">
        <div className="grid gap-4">
          {cartItems.map((item) => (
            <article key={item.id} className="glass grid gap-4 rounded-[1.5rem] p-4 shadow-luxe sm:grid-cols-[140px_1fr_auto]">
              <div className="relative h-36 overflow-hidden rounded-2xl">
                <Image src={item.image} alt={item.name} fill className="object-cover" sizes="140px" />
              </div>
              <div>
                <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">{item.name}</h2>
                <p className="mt-2 text-sm text-walnut dark:text-sand">{item.artisan} - {item.region}</p>
                <p className="mt-4 inline-flex items-center gap-2 rounded-full bg-sand/30 px-3 py-1 text-xs font-bold text-walnut dark:bg-white/10 dark:text-sand">
                  <Truck size={14} /> Delivery in 7-12 days
                </p>
              </div>
              <p className="text-xl font-bold text-terracotta">{formatInr(item.price)}</p>
            </article>
          ))}
        </div>
        <aside className="glass h-fit rounded-[1.5rem] p-6 shadow-luxe">
          <h2 className="font-serif text-3xl font-semibold text-ink dark:text-ivory">Order Summary</h2>
          <div className="mt-5 space-y-3 text-sm text-walnut dark:text-sand">
            <Row label="Subtotal" value={formatInr(subtotal)} />
            <Row label="Artisan packaging" value={formatInr(100)} />
            <Row label="Estimated shipping" value={formatInr(200)} />
            <Row label="Marketplace protection" value="Included" />
          </div>
          <div className="mt-6 border-t border-gold/20 pt-5">
            <Row label="Total" value={formatInr(subtotal + 300)} strong />
          </div>
          <button className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-ivory dark:bg-ivory dark:text-ink">
            <CreditCard size={17} /> Secure Checkout
          </button>
          <div className="mt-5 grid gap-3">
            {[Lock, PackageCheck, Truck].map((Icon, index) => (
              <p key={index} className="flex items-center gap-3 text-sm text-walnut dark:text-sand">
                <Icon size={16} className="text-gold" /> {["Encrypted payment flow", "Verified seller fulfillment", "Tracked worldwide delivery"][index]}
              </p>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 ${strong ? "text-lg font-bold text-ink dark:text-ivory" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
