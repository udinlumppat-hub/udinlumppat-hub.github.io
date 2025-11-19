import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Free</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£0</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Unlimited free ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Up to 4 photos per ad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Basic ad listing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Email notifications</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary border-2 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </span>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Premium</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£9.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Featured ad placement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Up to 8 photos per ad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Analytics dashboard</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Upgrade Now
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Business</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">£29.99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Unlimited featured ads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Top of search results</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Business verification badge</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-success" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
