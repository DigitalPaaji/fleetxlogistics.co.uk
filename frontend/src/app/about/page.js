"use client";
import { Shield, Users, Leaf, MapPin, Target, Heart } from "lucide-react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-200/10 py-24 md:py-32">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
          width={440}
          height={440}
            src="/banner01.webp"
            alt="Fleet X Logistics team and vans"
            className="w-full h-full object-cover "
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/60"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">


            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              More Than Just a
              <br />
              <span className="text-[#ff0000]">Delivery Company</span>
            </h1>

            <div className="w-24 h-0.5 mb-6 bg-[#ff0000] mx-auto"></div>

            <p className="text-white/90 text-md md:text-xl mb-8 max-w-2xl mx-auto">
              We are Fleet X Logistics — dedicated to excellence, powered by people, and helping shape the future of last-mile delivery across Hampshire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a
                href="/careers"
                className="bg-[#e20d0d] hover:bg-[#d12020] text-white font-semibold px-8 py-3 transition inline-flex items-center justify-center gap-3"
              >
                <Users className="w-5 h-5" />
                Join Our Team
              </a>
              <a
                href="#our-story"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-3 transition inline-flex items-center justify-center gap-3"
              >
                <Target className="w-5 h-5" />
                Our Story
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-16 md:py-24 px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
        <div className=" px-6">
          <div className="">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">Our Mission</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Who We Are
                </h2>
                
                <div className="space-y-4 text-white/80">
                  <p className="">
                    Fleet X Logistics was built with a simple but important mission: to provide a reliable, high-quality delivery service while creating a workplace where drivers genuinely feel supported and respected.
                  </p>
                  <p>
                    Based in Havant, Hampshire, we operate as an Amazon Delivery Service Partner, handling the final and most important stage of the delivery journey — the last mile. This is where reliability, care, and professionalism matter most.
                  </p>
                  <p>
                    We believe great service starts with happy drivers. That's why we focus on fair working practices, clear communication, modern equipment, and a team-first approach. When drivers feel valued, customers receive a better experience — it's that simple.
                  </p>
                </div>
              </div>
              
              <div className="">
                <Image
                width={440}
                height={440}
                  src="/team1.webp"
                  alt="Fleet X Logistics team"
                  className="w-full h-auto "
                />
           
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                { number: "50+", label: "Happy Drivers", icon: "👥" },
                { number: "10k+", label: "Weekly Deliveries", icon: "📦" },
                { number: "100%", label: "Electric Fleet", icon: "⚡" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-8 border border-white/10 bg-white/5 hover:border-[#ff0000]/40 transition group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-[#ff0000] mb-2">{stat.number}</div>
                  <div className="text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values - The Fleet X Difference */}
      <section className="py-16 md:py-24 border-y border-gray-200/10 mx-4 md:mx-12 lg:mx-24 xl:mx-40 2xl:mx-52">
        <div className="container mx-auto px-6">
          <div className="mx-auto">
            <div className="md:text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                <Heart className="w-4 h-4 text-[#ff0000]" />
                <span className="text-sm font-medium">Our Values</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                The Fleet X Difference
              </h2>
              
              <p className="text-white/80  max-w-2xl mx-auto">
                The logistics industry can be demanding, but at Fleet X Logistics we choose to do things differently. Our culture is built around three core principles.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Safety First — Always",
                  description: "Nothing is more important than our team getting home safely. We invest heavily in safety by operating modern electric Mercedes Sprinter vans fitted with advanced sensors and camera systems.",
                  points: [
                    "Modern safety technology in every van",
                    "No pressure to rush deliveries",
                    "Comprehensive safety training",
                    "Regular vehicle maintenance checks"
                  ]
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Drivers Are Partners, Not Numbers",
                  description: "We don't believe in high turnover or short-term thinking. Our drivers are partners in our success, not just names on a rota.",
                  points: [
                    "Supportive management team",
                    "Open communication channels",
                    "Help with self-employment setup",
                    "Career progression opportunities"
                  ]
                },
                {
                  icon: <Leaf className="w-8 h-8" />,
                  title: "Future-Focused & Sustainable",
                  description: "We are proud to operate a growing electric delivery fleet, helping reduce emissions across Hampshire while providing drivers with quiet, comfortable, automatic vehicles.",
                  points: [
                    "100% electric delivery fleet",
                    "Quiet, automatic vehicles",
                    "Reducing local emissions",
                    "Sustainable business practices"
                  ]
                }
              ].map((value, idx) => (
                <div key={idx} className="bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition group">
                  <div className="w-16 h-16 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <div className="text-[#ff0000]">
                      {value.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/80 mb-6">{value.description}</p>
                  
                  <ul className="space-y-3">
                    {value.points.map((point, pointIdx) => (
                      <li key={pointIdx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
                        <span className="text-white/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location & Community */}
      <section className="py-16 md:py-24   px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image
                width={440}
                height={440}
                  src="/team2.webp"
                  alt="Fleet X Logistics Havant depot"
                  className="w-full h-auto border border-white/10"
                />
                <div className="absolute -bottom-4 -left-4 px-6 py-3 bg-black border border-white/10">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#ff0000]" />
                    <span className="font-medium">Havant, Hampshire</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Local Roots</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Proudly Local
                </h2>
                
                <div className="space-y-4 text-white/80">
                  <p className="">
                    Fleet X Logistics is a locally based business serving the Havant and wider Hampshire area. From our local depot, we support nearby communities with reliable delivery services while creating steady work opportunities for local drivers.
                  </p>
                  <p>
                    We are proud to contribute to the local economy and build long-term relationships within the areas we serve. Every package we deliver strengthens our connection to the community.
                  </p>
                  <p>
                    As a local employer, we understand the importance of reliable transportation and employment opportunities in our region. We're committed to growing responsibly while supporting our community.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="border-l-4 border-[#ff0000] pl-4 py-2">
                    <div className="font-bold">Local Economy</div>
                    <div className="text-sm text-white/70">Supporting Hampshire businesses</div>
                  </div>
                  <div className="border-l-4 border-[#ff0000] pl-4 py-2">
                    <div className="font-bold">Community Focus</div>
                    <div className="text-sm text-white/70">Building local relationships</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join The Family CTA */}
      <section className="  px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48 py-16 md:py-24 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
              <Users className="w-4 h-4 text-[#ff0000]" />
              <span className="text-sm font-medium">Join Us</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of Our Journey
            </h3>
            
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              We are growing steadily and are always looking for reliable, motivated people to grow with us. If you're looking for a logistics company that values your time, effort, and professionalism, Fleet X Logistics could be the right fit for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-[#e20d0d] hover:bg-[#d12020] text-white font-bold px-8 py-4 text-lg transition inline-flex items-center justify-center gap-3"
              >
                <Target className="w-5 h-5" />
                See Our Open Positions
              </a>
              <a
                href="/faqs"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 transition inline-flex items-center justify-center gap-3"
              >
                <Heart className="w-5 h-5" />
                Learn More About Us
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Amazon Delivery Service Partner",
                    description: "Official partner delivering Amazon packages across Hampshire"
                  },
                  {
                    title: "Electric Delivery Fleet",
                    description: "Sustainable logistics with modern electric vans"
                  },
                    {
                    title: "Locally Owned",
                    description: "Havant-based company serving local communities"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-[#ff0000] font-bold text-lg mb-2">{item.title}</div>
                    <div className="text-white/70 text-sm">{item.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
<Footer/>
    </>

  );
};

export default AboutPage;