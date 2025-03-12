'use client'
import React from 'react';
import { motion, Variants } from 'framer-motion';

const CollaborativeHero = () => {
  // Text animation variants
  const titleVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { 
      y: 20, 
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Fixed the handshake variants by separating the shake animation
  // const handshakeVariants: Variants = {
  //   hidden: { 
  //     scale: 0,
  //     opacity: 0,
  //     rotate: -30
  //   },
  //   visible: {
  //     scale: 1,
  //     opacity: 1,
  //     rotate: 0,
  //     transition: {
  //       type: "spring",
  //       damping: 8,
  //       stiffness: 100,
  //       delay: 0.9
  //     }
  //   }
  // };

  const paragraphVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 0.8,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.8
      }
    }
  };

  const backgroundGradientVariants: Variants = {
    hidden: {
      background: "linear-gradient(to bottom right, #000000, #000000)",
    },
    visible: {
      background: "linear-gradient(to bottom right, #000000, #2d1a45, #111827)",
      transition: {
        duration: 1.5
      }
    }
  };

  return (
    <motion.div 
      className="w-full min-h-screen flex items-center justify-center py-20"
      initial="hidden"
      animate="visible"
      variants={backgroundGradientVariants}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants}>Humans </motion.span>
          <motion.span 
            className="inline-block mx-2"
            initial={{ scale: 0, opacity: 0, rotate: -30 }}
            animate={{ 
              scale: 1, 
              opacity: 1, 
              rotate: 0,
              transition: {
                type: "spring",
                damping: 8,
                stiffness: 100,
                delay: 0.9
              }
            }}
            whileInView={{
              rotate: [0, -5, 5, -5, 5, 0],
              transition: {
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 4
              }
            }}
          >
            <span role="img" aria-label="handshake" className="text-orange-300">🤝</span>
          </motion.span>
          <motion.span className="text-pink-200" variants={itemVariants}>AI in One</motion.span>
          <br />
          <motion.span className="text-purple-300" variants={itemVariants}>Collaborative Space.</motion.span>
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          variants={paragraphVariants}
        >
Work seamlessly with Tracesphere AI analysis engine and your team in real-time. Process documents, validate compliance, and extract critical insights faster and smarter, together.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CollaborativeHero;