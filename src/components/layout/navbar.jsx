// components/layout/navbar.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import Button from "@/components/ui/button"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="relative flex items-center justify-between py-4 sm:py-6">
      {/* Logo */}
      <Link href="/" className="text-base sm:text-lg font-bold text-green-500">
        Agro360Links
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-8 text-sm">
        <li><Link href="#" className="hover:text-green-500 transition-colors">Product</Link></li>
        <li><Link href="#" className="hover:text-green-500 transition-colors">About Us</Link></li>
        <li><Link href="#" className="hover:text-green-500 transition-colors">Services</Link></li>
        <li><Link href="#" className="hover:text-green-500 transition-colors">Pricing</Link></li>
        <li><Link href="#" className="hover:text-green-500 transition-colors">Blog</Link></li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <Button className="hidden lg:flex rounded-full bg-green-500 text-black hover:bg-green-400 text-sm">
          Contact Us
          <ArrowUpRight className="h-9 w-9 text-black bg-white rounded-full p-1" />
        </Button>

        <Button 
          size="icon" 
          variant="ghost" 
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm lg:hidden z-50"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="#" 
                className="block text-white hover:text-green-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Product
              </Link>
              <Link 
                href="#" 
                className="block text-white hover:text-green-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="#" 
                className="block text-white hover:text-green-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="#" 
                className="block text-white hover:text-green-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="#" 
                className="block text-white hover:text-green-500 transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Button 
                className="w-full mt-4 rounded-full bg-green-500 text-black hover:bg-green-400"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
                <ArrowUpRight className="h-9 w-9 text-white bg-black rounded-full p-1" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
