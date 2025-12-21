"use client"

import { Navbar } from './Components/Navbar';
import { Hero } from './Components/hero';
import { Clients } from './Components/Clients';
import { Services } from './Components/Services';
import { Testimonials } from './Components/Testimonials';
import Footer from './Components/Footer';
import { Home as HomeIcon, Briefcase, User, Mail } from 'lucide-react';

export default function Home() {
  const navItems = [
    { name: 'Home', url: '#', icon: HomeIcon },
    { name: 'Services', url: '#services', icon: Briefcase },
    { name: 'About', url: '#about', icon: User },
    { name: 'Contact', url: '#contact', icon: Mail }
  ];

  return (
    <>
      <Navbar items={navItems} />
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}
