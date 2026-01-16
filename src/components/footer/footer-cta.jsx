// components/footer/footer-cta.jsx

import { ArrowUpRight } from "lucide-react";
import Button from "../ui/button";
import FooterColumn from "./footer-column";

export default function FooterCTA() {
    return (
      <section className="relative bg-black text-white">
        
        {/* Background Image */}
        <img
          src="/thumb-1.jpg"
          alt="Agriculture drone"
          className="absolute inset-0 h-full w-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
  
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-24 space-y-20">
  
          {/* CTA */}
          <div className="max-w-xl space-y-6">
            <span className="inline-flex w-fit rounded-full bg-green-900/60 px-4 py-1 text-sm text-green-400">
              ● Contact Us
            </span>
  
            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to Transform Your
              <br />
              Farming Business?
            </h2>
  
            {/* <p className="text-sm text-gray-300">
              Book a free consultation and let Agro360Links show you how modern,
              sustainable farming works. Adapt and respond to shifting weather
              patterns and crop risk.
            </p> */}
  
            <Button variant="primary" >
                Get started
            <ArrowUpRight className="h-9 w-9 text-black bg-white rounded-full p-1" />
            </Button>
          </div>
  
          {/* Footer Links */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 text-sm">
  
            <div className="space-y-4">
              <p className="text-lg font-semibold text-green-500">Agro360Links</p>
              <p>hello@agro360links.com</p>
              <p>+15091212909102</p>
            </div>
  
            <FooterColumn title="Quick Links" links={["Service", "Features", "Pricing"]} />
            <FooterColumn title="Company" links={["About Us", "Our Team", "Reviews"]} />
            <FooterColumn title="Others" links={["Career", "Blog", "Contact"]} />
            <FooterColumn title="Social Media" links={["Instagram", "Facebook", "Tiktok"]} />
  
          </div>
  
          {/* Divider */}
          <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-400">
            © 2026 Agro360Links. All rights reserved.
          </div>
  
          {/* Brand Wordmark */}
          <div className="text-center text-6xl font-bold text-green-500 sm:text-8xl">
            Agro360Links
          </div>
  
        </div>
      </section>
    )
  }
  