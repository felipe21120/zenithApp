'use client'

import { useEffect, useState } from 'react';
import { Content, Navbar, Title } from "@/components";

export default function Home() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <div className="flex flex-row px-52 gap-10">
        <div className="w-1/2">
          {showNavbar && (
            <div className="fixed top-0 left-0 w-full bg-white p-4 shadow-lg z-50">
              <Navbar />
            </div>
          )}
        </div>
        <div className="w-1/2">
          <Content />
        </div>
      </div>
    </>
  );
}
