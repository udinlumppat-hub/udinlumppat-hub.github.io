import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-foreground mb-6">About BLOGUS</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Your trusted local marketplace connecting buyers and sellers across the UK
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  We've built a thriving community of over 100,000 active members helping each
                  other buy, sell, and connect locally.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Target className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To make buying and selling locally simple, safe, and accessible for everyone
                  across the United Kingdom.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Award className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Trusted Platform</h3>
                <p className="text-muted-foreground">
                  With verified sellers and secure messaging, we ensure your experience is safe
                  and reliable every time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Free to Use</h3>
                <p className="text-muted-foreground">
                  Post unlimited ads for free. No hidden fees, no subscriptions. Just honest,
                  straightforward classifieds.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Founded in 2020, BLOGUS was created with a simple vision: to bring local
              communities together through a platform that makes buying and selling easy,
              accessible, and completely free.
            </p>
            <p className="text-foreground leading-relaxed mb-4">
              We noticed that people were struggling with complicated platforms, hidden fees, and
              lack of local focus. So we built something different – a classifieds site that puts
              community first, keeps things simple, and never charges users to post ads.
            </p>
            <p className="text-foreground leading-relaxed">
              Today, we're proud to serve thousands of users every day across the UK, helping them
              find everything from their next pet to their dream car, all while supporting local
              communities and sustainable consumption.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
