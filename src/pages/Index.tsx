import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { AdCard } from "@/components/AdCard";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import featuredPuppy from "@/assets/featured-puppy.jpg";
import featuredCar from "@/assets/featured-car.jpg";
import featuredApartment from "@/assets/featured-apartment.jpg";
import featuredIphone from "@/assets/featured-iphone.jpg";
import gardenFurniture from "@/assets/garden-furniture.jpg";
import mountainBike from "@/assets/mountain-bike.jpg";
import ps5Console from "@/assets/ps5-console.jpg";
import diningTable from "@/assets/dining-table.jpg";
import camera from "@/assets/camera.jpg";
import scooter from "@/assets/scooter.jpg";
import leatherSofa from "@/assets/leather-sofa.jpg";
import trampoline from "@/assets/trampoline.jpg";

const featuredAds = [
  {
    id: "1",
    title: "Beautiful Golden Retriever Puppies",
    price: "£800",
    location: "London",
    time: "2h ago",
    image: featuredPuppy,
    featured: true,
  },
  {
    id: "2",
    title: "2019 BMW 3 Series in Excellent Condition",
    price: "£18,500",
    location: "Manchester",
    time: "5h ago",
    image: featuredCar,
    featured: true,
  },
  {
    id: "3",
    title: "Modern 2 Bedroom Apartment for Rent",
    price: "£1,200/mo",
    location: "Birmingham",
    time: "1d ago",
    image: featuredApartment,
    featured: true,
  },
  {
    id: "4",
    title: "iPhone 14 Pro Max - Like New",
    price: "£750",
    location: "Leeds",
    time: "3h ago",
    image: featuredIphone,
    featured: true,
  },
];

const recentAds = [
  {
    id: "5",
    title: "Garden Furniture Set - 6 Seater",
    price: "£350",
    location: "Bristol",
    time: "30m ago",
    image: gardenFurniture,
  },
  {
    id: "6",
    title: "Mountain Bike - Trek X-Caliber",
    price: "£450",
    location: "Liverpool",
    time: "1h ago",
    image: mountainBike,
  },
  {
    id: "7",
    title: "PS5 Console with 2 Controllers",
    price: "£400",
    location: "Sheffield",
    time: "2h ago",
    image: ps5Console,
  },
  {
    id: "8",
    title: "Antique Oak Dining Table",
    price: "£200",
    location: "Edinburgh",
    time: "4h ago",
    image: diningTable,
  },
  {
    id: "9",
    title: "Canon EOS R6 Camera Body",
    price: "£1,500",
    location: "Glasgow",
    time: "6h ago",
    image: camera,
  },
  {
    id: "10",
    title: "Electric Scooter - Xiaomi Pro 2",
    price: "£320",
    location: "Cardiff",
    time: "8h ago",
    image: scooter,
  },
  {
    id: "11",
    title: "Vintage Leather Sofa",
    price: "£600",
    location: "Newcastle",
    time: "12h ago",
    image: leatherSofa,
  },
  {
    id: "12",
    title: "Children's Trampoline with Safety Net",
    price: "£150",
    location: "Southampton",
    time: "1d ago",
    image: trampoline,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12 mb-12 shadow-lg">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Buy & Sell Locally
            </h1>
            <p className="text-lg mb-6 text-primary-foreground/90">
              Find amazing deals near you. Over 77,000+ active listings!
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Start Browsing
            </Button>
          </div>
        </section>

        {/* Featured Ads */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-foreground flex items-center gap-2">
              <TrendingUp className="h-8 w-8 text-accent" />
              Featured Ads
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}
          </div>
        </section>

        {/* Recent Ads */}
        <section>
          <h2 className="text-3xl font-bold mb-6 text-foreground">Recent Listings</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentAds.map((ad) => (
              <AdCard key={ad.id} {...ad} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
