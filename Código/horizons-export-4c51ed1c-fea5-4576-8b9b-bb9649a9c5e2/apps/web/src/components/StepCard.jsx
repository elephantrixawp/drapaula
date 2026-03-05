
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const StepCard = ({ stepNumber, title, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: stepNumber * 0.2 }}
    >
      <Card className="relative h-full border-border bg-card hover:shadow-lg transition-shadow duration-300">
        <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg">
            {stepNumber}
          </div>
          {Icon && (
            <div className="mt-4 w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
              <Icon className="w-8 h-8 text-secondary" />
            </div>
          )}
          <h3 className="text-2xl font-bold text-foreground pt-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default StepCard;
