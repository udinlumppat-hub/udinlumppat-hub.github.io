import { Header } from "@/components/Header";
import { CategoryNav } from "@/components/CategoryNav";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

const PostAd = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryNav />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8">Post Your Ad</h1>

          <Card>
            <CardHeader>
              <CardTitle>Ad Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pets">Pets</SelectItem>
                    <SelectItem value="motors">Motors</SelectItem>
                    <SelectItem value="property">Property</SelectItem>
                    <SelectItem value="for-sale">For Sale</SelectItem>
                    <SelectItem value="free-stuff">Free Stuff</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="community">Community</SelectItem>
                    <SelectItem value="jobs">Jobs</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="title">Ad Title</Label>
                <Input id="title" placeholder="e.g. Beautiful Golden Retriever Puppies" />
              </div>

              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" placeholder="£0.00" type="number" />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="e.g. London" />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your item in detail..."
                  rows={6}
                />
              </div>

              <div>
                <Label>Photos</Label>
                <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    PNG, JPG up to 10MB (max 8 photos)
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90" size="lg">
                  Post Ad
                </Button>
                <Button variant="outline" className="flex-1" size="lg">
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostAd;
