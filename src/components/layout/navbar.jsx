// components/layout/navbar.tsx
"use client"

import Link from "next/link"
import Button from "@/components/ui/button"
import { ArrowUpRight, Menu } from "lucide-react"

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <Link href="/" className="text-lg font-bold text-green-500">
        Agro360Links
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden lg:flex items-center gap-8 text-sm">
        <li><Link href="#">Product</Link></li>
        <li><Link href="#">About Us</Link></li>
        <li><Link href="#">Services</Link></li>
        <li><Link href="#">Pricing</Link></li>
        <li><Link href="#">Blog</Link></li>
      </ul>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <Button className="rounded-full bg-green-500 text-black hover:bg-green-400">
          Contact Us
          <ArrowUpRight className="h-9 w-9 text-black bg-white rounded-full p-1" />
        </Button>

        <Button size="icon" variant="ghost" className="lg:hidden">
          <Menu />
        </Button>
      </div>
    </nav>
  )
}
