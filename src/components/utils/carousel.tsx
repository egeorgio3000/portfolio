import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';



const Carousel = ({project}: {project: string}) => {
  const [index, setIndex] = useState(0);
  const images = [
    `/${project === 'Innovation Profiler' ? 'IP-img' : 'FLG-img'}/IP1.png`,
    `/${project === 'Innovation Profiler' ? 'IP-img' : 'FLG-img'}/IP2.png`,
    `/${project === 'Innovation Profiler' ? 'IP-img' : 'FLG-img'}/IP3.png`
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    setIndex(index);
  };

  return (
    <div className="relative w-[500px] h-[500px] overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -500, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Image src={images[index]} alt={`Image ${index}`} fill={true} style={{objectFit: "cover"}} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-gray-800' : 'bg-gray-400'}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;