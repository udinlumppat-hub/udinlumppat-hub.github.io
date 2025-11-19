import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import { MapPin, Clock, User, Heart, Share2, Flag } from "lucide-react";
import featuredPuppy from "@/assets/featured-puppy.jpg";

const AdDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={featuredPuppy}
                  alt="Ad"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  Featured
                </Badge>
              </div>
              <CardContent className="p-6">
                <h1 className="text-3xl font-bold text-foreground mb-4">
                  Beautiful Golden Retriever Puppies
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    London
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    Posted 2 hours ago
                  </span>
                </div>

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">Price</p>
                  <p className="text-4xl font-bold text-primary">£800</p>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-xl font-semibold mb-3">Description</h2>
                  <p className="text-foreground leading-relaxed">
                    Adorable Golden Retriever puppies ready for their forever homes! These beautiful
                    pups are 8 weeks old, fully vaccinated, and come with all health certificates.
                    They have been raised in a loving family environment and are well-socialized with
                    children and other pets.
                  </p>
                  <p className="text-foreground leading-relaxed mt-4">
                    Each puppy has been vet-checked and is in excellent health. They are playful,
                    friendly, and ready to become part of your family. Both parents are on-site and
                    have wonderful temperaments.
                  </p>
                  <h3 className="text-lg font-semibold mt-6 mb-2">What's included:</h3>
                  <ul className="list-disc list-inside text-foreground space-y-1">
                    <li>First vaccinations</li>
                    <li>Microchipped</li>
                    <li>Wormed and flea treated</li>
                    <li>Puppy pack with food and toys</li>
                    <li>4 weeks free insurance</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">John Smith</p>
                    <p className="text-sm text-muted-foreground">Member since 2023</p>
                  </div>
                </div>

                <Button className="w-full mb-3 bg-primary hover:bg-primary/90" size="lg">
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full mb-3" size="lg">
                  <Heart className="h-4 w-4 mr-2" />
                  Save Ad
                </Button>

                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1">
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Flag className="h-4 w-4 mr-2" />
                    Report
                  </Button>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="font-semibold mb-3">Safety Tips</h3>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Meet in a public place</li>
                    <li>• Check the item before payment</li>
                    <li>• Never send money in advance</li>
                    <li>• Verify seller identity</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdDetail;
