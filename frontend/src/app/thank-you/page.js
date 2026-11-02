"use client";
import { CheckCircle, Phone, Mail, Clock, ArrowRight, Truck } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const ApplicationThankYouPage = () => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = "/";
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Success Icon and Message */}
          <div className="text-center mb-12">
            <div className="w-24 h-24 mx-auto mb-8 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-[#ff0000]" />
            </div>
            
            <h1 className="text-3xl md:text-4xl  font-bold mb-6">
              Application Submitted Successfully!
            </h1>
            
            <div className="w-24 h-0.5 bg-[#ff0000] mx-auto mb-8"></div>
            
            <p className=" text-white/80 mb-6 max-w-2xl mx-auto">
              Thank you for applying to join Fleet X Logistics as a delivery driver. 
              Our recruitment team will contact you within 24 hours.
            </p>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 backdrop-blur-sm">
              <Clock className="w-4 h-4 text-[#ff0000]" />
              <span className="text-sm font-medium">Redirecting to homepage in {countdown} seconds</span>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white/5 border border-white/10 p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">What Happens Next?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-[#ff0000]" />
                </div>
                <h3 className="font-bold mb-2">1. Phone Screening</h3>
                <p className="text-white/70 text-sm">
                  We'll call you to discuss the role and answer any questions you have.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-[#ff0000]" />
                </div>
                <h3 className="font-bold mb-2">2. Email Follow-up</h3>
                <p className="text-white/70 text-sm">
                  You'll receive an email with more details about the application process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-6 h-6 text-[#ff0000]" />
                </div>
                <h3 className="font-bold mb-2">3. Interview & Training</h3>
                <p className="text-white/70 text-sm">
                  If successful, we'll arrange an interview and discuss training dates.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Need to Contact Us?</h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <a
                href="tel:07454954265"
                className="bg-white/5 border border-white/10 p-6 hover:border-[#ff0000]/40 transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-600/20 border border-green-600/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us Directly</h3>
                    <p className="text-white/70">07454954265</p>
                  </div>
                </div>
              </a>
              
              <a
                href="mailto:contact@fleetxlogistics.co.uk"
                className="bg-white/5 border border-white/10 p-6 hover:border-[#ff0000]/40 transition group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#ff0000]" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Send an Email</h3>
                    <p className="text-white/70 text-sm break-all">contact@fleetxlogistics.co.uk</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Back to Home & Careers */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-[#ff0000] hover:bg-[#d12020] text-white font-bold py-3 px-8 transition flex items-center justify-center gap-2"
            >
              <ArrowRight className="w-4 h-4 rotate-180" />
              Back to Homepage
            </Link>
            
            <Link
              href="/careers"
              className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold py-3 px-8 transition flex items-center justify-center gap-2"
            >
              View Careers Page
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="text-center">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="flex flex-wrap justify-center gap-6">
                <Link href="/about" className="text-white/70 hover:text-[#ff0000] transition">
                  About Us
                </Link>
                <Link href="/careers" className="text-white/70 hover:text-[#ff0000] transition">
                  Careers
                </Link>
                <Link href="/contact" className="text-white/70 hover:text-[#ff0000] transition">
                  Contact
                </Link>
                <Link href="/faqs" className="text-white/70 hover:text-[#ff0000] transition">
                  FAQs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link href="/" className="inline-block mb-4">
              <img 
                src="/logo.webp" 
                alt="Fleet X Logistics" 
                className="h-12 w-auto mx-auto opacity-80"
              />
            </Link>
            <div className="text-white/60 text-sm">
              <div>Fleet X Logistics – Official Amazon Delivery Service Partner</div>
              <div className="mt-2">© {new Date().getFullYear()} Fleet X Logistics Ltd.</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationThankYouPage;