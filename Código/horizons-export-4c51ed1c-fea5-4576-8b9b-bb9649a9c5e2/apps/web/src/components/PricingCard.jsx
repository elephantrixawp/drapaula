
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PricingCard = ({ title, price, description, features, isPopular, onSelect }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className={`h-full flex flex-col ${isPopular ? 'border-accent border-2 shadow-xl' : 'border-border'} bg-card relative`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Mais Popular
          </div>
        )}
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl font-bold text-foreground">{title}</CardTitle>
          <CardDescription className="text-muted-foreground mt-2">{description}</CardDescription>
          <div className="mt-4">
            <span className="text-4xl font-bold text-primary">{price}</span>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            onClick={onSelect}
            className={`w-full ${isPopular ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'} text-white`}
          >
            Agendar Agora
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default PricingCard;
