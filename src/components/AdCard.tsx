import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface AdCardProps {
  id: string;
  title: string;
  price: string;
  location: string;
  time: string;
  image: string;
  featured?: boolean;
}

export const AdCard = ({ id, title, price, location, time, image, featured }: AdCardProps) => {
  return (
    <Link to={`/ad/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
        <div className="relative overflow-hidden aspect-video">
          {featured && (
            <Badge className="absolute top-2 left-2 z-10 bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-2xl font-bold text-primary mb-2">{price}</p>
          <div className="flex items-center text-sm text-muted-foreground gap-3">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {time}
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
