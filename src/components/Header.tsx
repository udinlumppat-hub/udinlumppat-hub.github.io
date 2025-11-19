import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 gap-4">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2">
            BLOGUS
          </Link>

          <div className="hidden md:flex flex-1 max-w-2xl gap-2">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search ads..."
                className="bg-card text-card-foreground pr-10"
              />
              <Button size="icon" className="absolute right-0 top-0 bg-accent hover:bg-accent/90">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <Button variant="outline" className="bg-card text-card-foreground border-border hover:bg-secondary">
              <MapPin className="h-4 w-4 mr-2" />
              Location
            </Button>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link to="/login">
              <Button variant="ghost" className="hover:bg-primary-foreground/10">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button variant="secondary" className="bg-card text-card-foreground hover:bg-secondary">
                Sign Up
              </Button>
            </Link>
            <Link to="/post-ad">
              <Button className="bg-accent hover:bg-accent/90">
                Post Ad
              </Button>
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search ads..."
                className="bg-card text-card-foreground pr-10"
              />
              <Button size="icon" className="absolute right-0 top-0 bg-accent hover:bg-accent/90">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="/login">
                <Button variant="outline" className="w-full bg-card text-card-foreground">
                  Login
                </Button>
              </Link>
              <Link to="/signup">
                <Button variant="secondary" className="w-full">
                  Sign Up
                </Button>
              </Link>
              <Link to="/post-ad">
                <Button className="w-full bg-accent hover:bg-accent/90">
                  Post Ad
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
