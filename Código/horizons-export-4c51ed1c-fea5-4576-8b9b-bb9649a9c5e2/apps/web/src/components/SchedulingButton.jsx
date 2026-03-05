
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const SchedulingButton = ({ onClick }) => {
  const whatsappNumber = '5511999999999'; // Replace with actual number
  const message = encodeURIComponent('Olá! Gostaria de agendar uma triagem inicial com a Dra. Paula Pires.');
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
    >
      <Button
        onClick={handleClick}
        size="lg"
        className="rounded-full w-16 h-16 bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-2xl hover:shadow-3xl transition-all duration-300"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      <motion.div
        className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.div>
  );
};

export default SchedulingButton;
