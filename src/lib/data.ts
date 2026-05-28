import {
  BadgeCheck,
  BarChart3,
  Boxes,
  Brush,
  Gem,
  Globe2,
  Heart,
  Home,
  Languages,
  Leaf,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Store,
  Truck,
  Users,
  Wand2
} from "lucide-react";

export const navItems = [
  { label: "Shop", href: "/shop" },
  { label: "Categories", href: "/categories" },
  { label: "Stories", href: "/stories" },
  { label: "Artisans", href: "/artisans/anaya-rugs" },
  { label: "Seller", href: "/seller" }
];

export const categories = [
  { name: "Home Decor", count: 428, image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80" },
  { name: "Ceramics", count: 216, image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=900&q=80" },
  { name: "Textiles", count: 362, image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=80" },
  { name: "Jewelry", count: 184, image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80" },
  { name: "Traditional Fashion", count: 246, image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80" },
  { name: "Collectibles", count: 139, image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=900&q=80" }
];

export const products = [
  {
    id: "terracotta-moon-vase",
    name: "Terracotta Moon Vase",
    artisan: "Mira Clay Studio",
    region: "Rajasthan, India",
    craft: "Pottery",
    material: "Sun-fired terracotta",
    color: "Terracotta",
    price: 100,
    rating: 4.9,
    reviews: 128,
    badge: "Handmade Authentic",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=900&q=80",
    story: "Each vessel is shaped in small batches, burnished by hand, and finished with a mineral wash inspired by desert architecture.",
    height: "lg"
  },
  {
    id: "walnut-carved-tray",
    name: "Walnut Carved Serving Tray",
    artisan: "Atlas Woodcraft",
    region: "Marrakech, Morocco",
    craft: "Wood carving",
    material: "Walnut wood",
    color: "Walnut",
    price: 200,
    rating: 4.8,
    reviews: 92,
    badge: "Seller Verified",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=900&q=80",
    story: "A geometric border is carved over three days using hand tools passed down through a family workshop.",
    height: "md"
  },
  {
    id: "gold-thread-runner",
    name: "Gold Thread Table Runner",
    artisan: "Anaya Loom House",
    region: "Gujarat, India",
    craft: "Handloom weaving",
    material: "Cotton and zari",
    color: "Antique Gold",
    price: 300,
    rating: 5,
    reviews: 210,
    badge: "Festival Edit",
    image: "https://images.unsplash.com/photo-1600166898405-da9535204843?auto=format&fit=crop&w=900&q=80",
    story: "A luminous table textile woven on pit looms with ceremonial motifs and soft modern proportions.",
    height: "sm"
  },
  {
    id: "brass-ritual-lamp",
    name: "Hammered Brass Ritual Lamp",
    artisan: "Nile Metal Atelier",
    region: "Cairo, Egypt",
    craft: "Metalwork",
    material: "Recycled brass",
    color: "Gold",
    price: 500,
    rating: 4.7,
    reviews: 76,
    badge: "Low Stock",
    image: "https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6?auto=format&fit=crop&w=900&q=80",
    story: "A sculptural lamp hammered into a soft glow, designed for shelves, ceremonies, and intimate dinners.",
    height: "xl"
  },
  {
    id: "indigo-block-print-kimono",
    name: "Indigo Block Print Kimono",
    artisan: "Blue Courtyard Collective",
    region: "Jaipur, India",
    craft: "Block printing",
    material: "Organic cotton",
    color: "Indigo",
    price: 1000,
    rating: 4.9,
    reviews: 164,
    badge: "Natural Dye",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
    story: "Hand-stamped cotton robe with plant-based indigo and a relaxed global resort silhouette.",
    height: "lg"
  },
  {
    id: "woven-wall-disc",
    name: "Woven Sahara Wall Disc",
    artisan: "Sana Basket Guild",
    region: "Tunis, Tunisia",
    craft: "Basketry",
    material: "Palm fiber",
    color: "Sand",
    price: 100,
    rating: 4.8,
    reviews: 58,
    badge: "Eco Craft",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80",
    story: "Palm fiber coils form a quiet sunburst for gallery walls and warm minimalist rooms.",
    height: "md"
  }
];

export const artisans = [
  {
    id: "anaya-rugs",
    name: "Anaya Loom House",
    region: "Gujarat, India",
    craft: "Handloom textiles",
    since: "1986",
    sales: "12.8k",
    rating: 4.96,
    image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?auto=format&fit=crop&w=1000&q=80",
    quote: "We weave old ceremony into homes that live everywhere.",
    bio: "A women-led weaving cooperative specializing in cotton, wool, natural dye, and ceremonial motifs reinterpreted for modern homes."
  },
  {
    id: "mira-clay",
    name: "Mira Clay Studio",
    region: "Rajasthan, India",
    craft: "Pottery",
    since: "2002",
    sales: "8.4k",
    rating: 4.92,
    image: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1000&q=80",
    quote: "Clay remembers every hand that shapes it.",
    bio: "A family ceramic studio crafting tactile vases, lamps, and tableware from locally sourced desert clay."
  },
  {
    id: "atlas-wood",
    name: "Atlas Woodcraft",
    region: "Marrakech, Morocco",
    craft: "Carved wood",
    since: "1974",
    sales: "6.1k",
    rating: 4.88,
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1000&q=80",
    quote: "Pattern is our quiet signature.",
    bio: "A father-daughter workshop known for walnut trays, inlaid boxes, and sculptural objects with precise geometric carving."
  }
];

export const featurePillars = [
  { icon: BadgeCheck, title: "Verified Artisans", text: "Seller verification, authenticity badges, and craft provenance on every premium listing." },
  { icon: Globe2, title: "Global Fulfillment", text: "Worldwide delivery estimates, secure checkout UI, duties-ready order flows, and tracking." },
  { icon: Sparkles, title: "AI Recommendations", text: "Personalized discovery, recently viewed items, and festival-season collections." },
  { icon: ShieldCheck, title: "Secure Payments", text: "Payment gateway-ready checkout, encrypted account flows, and buyer protection cues." }
];

export const premiumFeatures = [
  { icon: Wand2, label: "AI Picks" },
  { icon: Languages, label: "Multi-language" },
  { icon: MessageCircle, label: "Live Chat" },
  { icon: Home, label: "AR Decor Preview" },
  { icon: Heart, label: "Wishlist" },
  { icon: Truck, label: "Delivery ETA" }
];

export const sellerStats = [
  { label: "Monthly revenue", value: "₹28.4L", trend: "+18%" },
  { label: "Open orders", value: "146", trend: "+9" },
  { label: "Inventory health", value: "92%", trend: "strong" },
  { label: "Chat response", value: "4m", trend: "fast" }
];

export const adminStats = [
  { label: "GMV", value: "₹1.8Cr", icon: BarChart3 },
  { label: "Verified sellers", value: "2,418", icon: Users },
  { label: "Pending approvals", value: "82", icon: PackageCheck },
  { label: "Live categories", value: "64", icon: Boxes }
];

export const craftTypes = ["Pottery", "Textiles", "Wood carving", "Metalwork", "Basketry", "Jewelry", "Fashion"];
export const regions = ["India", "Morocco", "Egypt", "Tunisia", "Mexico", "Japan", "Peru"];
export const materials = ["Terracotta", "Walnut wood", "Cotton", "Brass", "Palm fiber", "Silver", "Wool"];
export const quickLinks = [
  { icon: Store, label: "Marketplace", href: "/shop" },
  { icon: Brush, label: "Artisan Studio", href: "/artisans/anaya-rugs" },
  { icon: Gem, label: "Luxury Decor", href: "/categories" },
  { icon: Leaf, label: "Sustainable Craft", href: "/about" }
];
