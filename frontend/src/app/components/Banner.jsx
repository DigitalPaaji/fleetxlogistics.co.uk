"use client";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[650px] lg:h-[750px] flex items-center px-6 md:px-12 lg:px-16 xl:px-32 2xl:px-48 justify-start bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/0.webp')" }}
    >
      {/* Multi-layer Gradient Overlay for Depth and Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-0"></div>

      {/* Ambient Glow Accent */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none z-0"></div>

      {/* Content Container with Entrance Styling */}
      <div className="relative z-10 max-w-2xl lg:max-w-4xl py-24 space-y-6 animate-fade-in">
        
        {/* Top Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-medium tracking-wide uppercase shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Portsmouth Openings
        </div>

        {/* Main Heading (Text content unchanged) */}
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.15] drop-shadow-md">
          Drive with fleet X logistics amazon Delivery Driver Jobs Portsmouth
        </h1>

        {/* Subtext (Text content unchanged) */}
        <p className="text-base lg:text-lg text-gray-200 font-normal leading-relaxed max-w-2xl drop-shadow">
          Free company vans. Clear weekly pay. Consistent work.{" "}
          <span className="block mt-1 text-gray-300">
            Join a professional Amazon Delivery Service Partner in Portsmouth.
          </span>
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center gap-4">
          <a
            href="/apply"
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-lg text-sm tracking-wide transition-all duration-300 shadow-xl hover:translate-x-1 group"
          >
            Apply Now
            <BsArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-medium px-6 py-4 rounded-lg text-sm tracking-wide transition-all duration-300"
          >
            Learn More
          </a>
        </div>

      </div>
    </section>
  );
}