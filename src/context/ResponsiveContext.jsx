import { SidebarOpen } from 'lucide-react';
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';

const ResponsiveContext = createContext();

export const useResponsive = () => useContext(ResponsiveContext);

export const ResponsiveProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = useCallback(() => {
    const width = window.innerWidth;
    setIsTablet(width >= 500 && width < 1024);
    setIsMobile(width < 500);
    setIsSidebarOpen(width >= 1024);
    
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleToggleSidebar = useCallback(() => {
      setIsSidebarOpen(prev => !prev);
  }, [SidebarOpen]);

  

  const value = {
    isSidebarOpen,
    isTablet,
    isMobile,
    handleToggleSidebar,
  };

  return (
    <ResponsiveContext.Provider value={value}>
      {children}
    </ResponsiveContext.Provider>
  );
};