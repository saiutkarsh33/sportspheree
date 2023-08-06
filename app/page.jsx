"use client"


import { useState, useEffect } from 'react';
import Image from 'next/image';

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window width is larger than 768px (Tailwind's default 'md' breakpoint)
    if (window.innerWidth > 768) {
      setIsDesktop(true);
    }
  }, []);

  return (
    <section className="w-full flex-center flex-col space-y-10 p-4 md:p-0">
      <Image
        src='/assets/images/logo.svg'
        alt='logo'
        width={300}
        height={300}
        className='object-contain'
      />
      <h1 className={`head_text text-center mb-6 md:mb-12 font-medium text-5xl `}>
        Welcome to Sportspheree!   
        <br className="max-md:hidden" />
        <span className={`block text-center text-white mt-4 md:mt-8 font-medium  text-4xl md:text-5xl`}>
          Sports Buzz, Rumours and Bold Hot takes!
        </span>
      </h1>
      <p className="text-center text-white text-xl md:text-2xl font-inter mt-8 bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-3xl shadow hero__subtitle">
        Welcome to Sportspheree - where the sports world converges! Get the latest updates, engage in passionate discussions, and connect with fellow sports enthusiasts. Your ultimate destination for all things sports!
        Post & Share today!
      </p>
    </section>
  )
}

export default Home;





