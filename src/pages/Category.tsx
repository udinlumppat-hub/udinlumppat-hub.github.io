import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { AdCard } from "@/components/AdCard";
import { Footer } from "@/components/Footer";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

const categoryData: Record<string, { title: string; ads: any[] }> = {
  pets: {
    title: "Pets",
    ads: [
      {
        id: "p1",
        title: "Adorable Labrador Puppies",
        price: "£650",
        location: "Oxford",
        time: "1h ago",
        image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500&q=80",
      },
      {
        id: "p2",
        title: "British Shorthair Kittens",
        price: "£500",
        location: "Cambridge",
        time: "3h ago",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=500&q=80",
      },
      {
        id: "p3",
        title: "Cockatiel with Cage",
        price: "£120",
        location: "Brighton",
        time: "5h ago",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=500&q=80",
      },
      {
        id: "p4",
        title: "Rabbit Hutch and Run",
        price: "£80",
        location: "York",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=500&q=80",
      },
    ],
  },
  motors: {
    title: "Motors",
    ads: [
      {
        id: "m1",
        title: "2020 Audi A4 S Line",
        price: "£22,000",
        location: "London",
        time: "2h ago",
        image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&q=80",
      },
      {
        id: "m2",
        title: "Ford Focus Titanium 2018",
        price: "£12,500",
        location: "Manchester",
        time: "4h ago",
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&q=80",
      },
      {
        id: "m3",
        title: "Honda CBR 600 Motorcycle",
        price: "£4,500",
        location: "Bristol",
        time: "6h ago",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      },
      {
        id: "m4",
        title: "Volkswagen Golf GTI 2019",
        price: "£18,000",
        location: "Birmingham",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80",
      },
    ],
  },
  property: {
    title: "Property",
    ads: [
      {
        id: "pr1",
        title: "3 Bed House with Garden",
        price: "£1,800/mo",
        location: "Leeds",
        time: "30m ago",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&q=80",
      },
      {
        id: "pr2",
        title: "City Centre Studio Flat",
        price: "£850/mo",
        location: "Liverpool",
        time: "2h ago",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80",
      },
      {
        id: "pr3",
        title: "Luxury Penthouse Apartment",
        price: "£3,500/mo",
        location: "Edinburgh",
        time: "5h ago",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&q=80",
      },
      {
        id: "pr4",
        title: "Detached 4 Bed Family Home",
        price: "£2,200/mo",
        location: "Glasgow",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=500&q=80",
      },
    ],
  },
  "for-sale": {
    title: "For Sale",
    ads: [
      {
        id: "fs1",
        title: "Samsung 55 4K Smart TV",
        price: "£400",
        location: "Cardiff",
        time: "1h ago",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
      },
      {
        id: "fs2",
        title: "Gaming PC - RTX 3080",
        price: "£1,200",
        location: "Newcastle",
        time: "3h ago",
        image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=500&q=80",
      },
      {
        id: "fs3",
        title: "Designer Handbag Collection",
        price: "£350",
        location: "Southampton",
        time: "6h ago",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
      },
      {
        id: "fs4",
        title: "Kids Toys Bundle",
        price: "£50",
        location: "Nottingham",
        time: "12h ago",
        image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=500&q=80",
      },
    ],
  },
  "free-stuff": {
    title: "Free Stuff",
    ads: [
      {
        id: "f1",
        title: "Free Wooden Pallets",
        price: "FREE",
        location: "Reading",
        time: "2h ago",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80",
      },
      {
        id: "f2",
        title: "Old Magazines Collection",
        price: "FREE",
        location: "Plymouth",
        time: "4h ago",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",
      },
      {
        id: "f3",
        title: "Moving Boxes",
        price: "FREE",
        location: "Derby",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1600783245777-5c91f6b5c734?w=500&q=80",
      },
      {
        id: "f4",
        title: "Garden Soil - Must Collect",
        price: "FREE",
        location: "Leicester",
        time: "2d ago",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=500&q=80",
      },
    ],
  },
  services: {
    title: "Services",
    ads: [
      {
        id: "s1",
        title: "Professional House Cleaning",
        price: "£15/hr",
        location: "London",
        time: "1h ago",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=80",
      },
      {
        id: "s2",
        title: "Experienced Plumber Available",
        price: "£40/hr",
        location: "Manchester",
        time: "3h ago",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=500&q=80",
      },
      {
        id: "s3",
        title: "Graphic Design Services",
        price: "£25/hr",
        location: "Birmingham",
        time: "5h ago",
        image: "https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?w=500&q=80",
      },
      {
        id: "s4",
        title: "Dog Walking & Pet Sitting",
        price: "£12/hr",
        location: "Bristol",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?w=500&q=80",
      },
    ],
  },
  community: {
    title: "Community",
    ads: [
      {
        id: "c1",
        title: "Local Football Team Recruiting",
        price: "Free to Join",
        location: "Leeds",
        time: "2h ago",
        image: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=500&q=80",
      },
      {
        id: "c2",
        title: "Book Club Meeting - New Members",
        price: "Free",
        location: "Oxford",
        time: "4h ago",
        image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=500&q=80",
      },
      {
        id: "c3",
        title: "Yoga Classes in the Park",
        price: "£5/session",
        location: "Cambridge",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      },
      {
        id: "c4",
        title: "Charity Car Wash Event",
        price: "Donations",
        location: "Brighton",
        time: "2d ago",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=500&q=80",
      },
    ],
  },
  jobs: {
    title: "Jobs",
    ads: [
      {
        id: "j1",
        title: "Full-Time Barista Wanted",
        price: "£10.50/hr",
        location: "London",
        time: "1h ago",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500&q=80",
      },
      {
        id: "j2",
        title: "Software Developer - React",
        price: "£45k-£60k",
        location: "Manchester",
        time: "3h ago",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
      },
      {
        id: "j3",
        title: "Warehouse Operative",
        price: "£11/hr",
        location: "Birmingham",
        time: "6h ago",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80",
      },
      {
        id: "j4",
        title: "Part-Time Delivery Driver",
        price: "£12/hr",
        location: "Liverpool",
        time: "1d ago",
        image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500&q=80",
      },
    ],
  },
};

const Category = () => {
  const { category } = useParams();
  const data = categoryData[category || "pets"] || categoryData.pets;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-foreground">{data.title}</h1>
          <Button variant="outline" className="gap-2">
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.ads.map((ad) => (
            <AdCard key={ad.id} {...ad} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Category;
