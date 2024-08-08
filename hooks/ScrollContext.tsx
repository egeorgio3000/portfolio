import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  scrollToElement: (selector: string) => void;
}

const ScrollContext = createContext<ScrollContextProps | undefined>(undefined);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToElement = (selector: string) => {
    if (scrollRef.current) {
      const element = scrollRef.current.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, scrollToElement }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (context === undefined) {
    throw new Error('useScroll must be used within a ScrollProvider');
  }
  return context;
};