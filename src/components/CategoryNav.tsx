import { Link } from "react-router-dom";
import { Dog, Car, Home, Package, Gift, Wrench, Users, Briefcase, Heart } from "lucide-react";

const categories = [
  { name: "Pets", icon: Dog, path: "/category/pets" },
  { name: "Motors", icon: Car, path: "/category/motors" },
  { name: "Property", icon: Home, path: "/category/property" },
  { name: "For Sale", icon: Package, path: "/category/for-sale" },
  { name: "Free Stuff", icon: Gift, path: "/category/free-stuff" },
  { name: "Services", icon: Wrench, path: "/category/services" },
  { name: "Community", icon: Users, path: "/category/community" },
  { name: "Jobs", icon: Briefcase, path: "/category/jobs" },
];

export const CategoryNav = () => {
  return (
    <nav className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto py-2 scrollbar-hide">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.path}
              className="flex flex-col items-center min-w-[80px] px-3 py-2 rounded-lg hover:bg-secondary transition-colors group"
            >
              <category.icon className="h-6 w-6 text-primary mb-1 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-medium text-foreground whitespace-nowrap">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
