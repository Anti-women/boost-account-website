import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  features: string[];
}

const ServiceCard = ({ title, description, price, image, popular, features }: ServiceCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 ${popular ? 'border-boost-purple shadow-lg shadow-boost-purple/20' : 'border-border hover:border-boost-purple/50'}`}>
      {popular && (
        <div className="absolute top-0 right-0">
          <Badge className="m-2 bg-boost-purple">Популярно</Badge>
        </div>
      )}
      
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background pointer-events-none z-10"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <CardHeader className="relative z-20">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent className="relative z-20">
        <div className="mb-4">
          <p className="text-3xl font-bold text-boost-purple">{price}</p>
        </div>
        
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-boost-purple">✓</span>
              <span className="text-foreground/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      
      <CardFooter className="relative z-20">
        <Button className={`w-full ${popular ? 'bg-boost-purple hover:bg-boost-purple/90' : 'bg-secondary hover:bg-secondary/90'}`}>
          Выбрать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
