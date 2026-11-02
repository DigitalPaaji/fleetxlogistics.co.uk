"use client";
import React from "react";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function OpeningsSection() {
  const jobs = [
    {
      title: "Delivery Driver Totton / Southampton",
      url: "https://smrtr.io/Crt6-",
      description:
        "Join our professional delivery operations covering the Totton and Southampton areas. Enjoy stable routes, modern fleet vehicles, consistent work, and transparent weekly pay supported by Fleet X Logistics.",
    },
    {
      title: "Delivery Driver Havant / Portsmouth",
      url: "https://smrtr.io/Crt2c",
      description:
        "Looking for delivery driver work in Havant or Portsmouth? Partner with an official Amazon Delivery Service Partner offering structured routes, immediate starts, weekly pay, and full support from day one.",
    },
  ];

  return (
    <section className="border-b border-gray-200/10 relative flex items-center justify-center bg-cover bg-center py-24 px-6 md:px-12 lg:px-16 xl:px-32">
      <div className="relative z-10 w-full py-12">
        <div className="text-left mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            Current Openings & Available <br />
            Delivery Driver Roles.
          </h2>
          {/* SEPARATOR */}
          <div className="w-24 h-0.5 mb-4 bg-[#ff0000]"></div>
          <p className="text-white/90 text-md">
            Explore our open delivery positions across Hampshire. Select a location below to view full details and apply directly in under 60 seconds.
          </p>
        </div>

        {/* Jobs Grid matching reference card style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-md transition-all duration-300 hover:border-[#ff0000]/50 hover:bg-white/[0.05] group"
            >
              <div>
                <h3 className="text-2xl font-bold leading-snug mb-4 text-white group-hover:text-red-400 transition-colors">
                  {job.title}
                </h3>
                {/* CARD SEPARATOR */}
                <div className="w-16 h-0.5 mb-4 bg-[#ff0000]"></div>
                <p className="text-white/80 text-sm md:text-base leading-relaxed mb-8">
                  {job.description}
                </p>
              </div>

              <div>
                <Link
                  href={job.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full sm:w-auto bg-[#ff0000] hover:bg-[#e00000] text-white px-6 py-4 rounded-xl font-semibold text-xs tracking-[1.2px] uppercase transition-all duration-300 shadow-lg shadow-[#ff0000]/20"
                >
                  <span className="flex items-center gap-3">
                    Apply For Job
                    <span className="w-6 h-6 rounded bg-black/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      <BsArrowUpRight className="w-3.5 h-3.5 text-white" />
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}