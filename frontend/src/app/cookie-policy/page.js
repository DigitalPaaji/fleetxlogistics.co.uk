"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link"; // Assuming Next.js for the Link component

const CookiePolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 xl:px-32 py-12 md:py-24">
        
        <div className="maxl mx-auto space-y-12">

          {/* Header / Intro */}
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
            <div className="w-20 h-1 bg-[#ff0000] mb-6"></div>
            <p className="text-white/80 text-lg leading-relaxed">
              We use cookies to ensure our website works properly and to understand how visitors use it.
            </p>
          </div>

          {/* Types of Cookies */}
          <section>
            <h2 className="text-2xl font-bold mb-6 text-white">Types of Cookies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#ff0000]">
                <h3 className="text-lg font-bold text-white mb-2">Essential Cookies</h3>
                <p className="text-white/70 text-sm">
                  Required for site functionality.
                </p>
              </div>
              <div className="bg-white/5 p-6 rounded-lg border-l-4 border-white/20">
                <h3 className="text-lg font-bold text-white mb-2">Analytics Cookies</h3>
                <p className="text-white/70 text-sm">
                  Used only with your consent.
                </p>
              </div>
            </div>
          </section>

          {/* Cookie Consent Info */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Cookie Consent</h2>
            <p className="text-white/80 leading-relaxed">
              You can accept or reject non-essential cookies using the cookie banner shown when you first visit the site.
            </p>
          </section>

          {/* Application Consent Notice */}
          <section className="bg-white/5 p-8 rounded-lg border border-white/10 mt-8">
            <h3 className="text-xl font-bold mb-4 text-white">Application Consent</h3>
            <p className="text-white/60 mb-4 text-sm uppercase tracking-widest">
              Statement for Application Forms
            </p>
            <div className="p-4 bg-black/40 rounded border border-white/10">
              <p className="text-white text-lg">
                By applying, you agree to our <Link href="/privacy-policy" className="text-[#ff0000] hover:underline font-medium">Privacy Policy</Link>.
              </p>
            </div>
          </section>

          {/* Footer Navigation */}
          <div className="border-t border-white/10 pt-8 flex gap-6 text-sm">
             <Link href="/" className="text-white/70 hover:text-[#ff0000] transition">Home</Link>
             <Link href="/careers" className="text-white/70 hover:text-[#ff0000] transition">Careers</Link>
             <Link href="/privacy-policy" className="text-white/70 hover:text-[#ff0000] transition">Privacy Policy</Link>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;