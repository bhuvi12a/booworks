"use client"

import { Navbar } from './Components/Navbar';
import { Hero } from './Components/hero';
import { Clients } from './Components/Clients';
import { Testimonials } from './Components/Testimonials';
import { Home as HomeIcon, Briefcase, User, Mail } from 'lucide-react';

export default function Home() {
  const navItems = [
    { name: 'Home', url: '/', icon: HomeIcon },
    { name: 'Services', url: '/services', icon: Briefcase },
    { name: 'About', url: '/#about', icon: User },
    { name: 'Contact', url: '/contact', icon: Mail }
  ];

  return (
    <>
      <Hero />
      <Clients />
      <Testimonials />
    </>
  );
}
