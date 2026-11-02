"use client";
import { useState } from "react";
import {
  Truck,
  Clock,
  CreditCard,
  Award,
  Calendar,
  FileText,
  CheckCircle,
  Phone,
  Mail,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const CareersPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    postcode: "",
    licence: "",
    age: "",
    points: "",
    startDate: "ASAP",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // In production, you would send this data to your backend
    alert("Application submitted! We'll contact you within 24 hours.");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
      {/* Hero Section */}
      <section className="border-b border-gray-200/10 relative flex items-center justify-center bg-cover bg-center py-24">
        <div className="relative z-10 w-full py-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium">Immediate Starts Available</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold leading-tight mb-6">
                Delivery Driver Jobs in
                <br />
                <span className="text-[#ff0000]">Havant & Hampshire</span>
              </h1>
              
              {/* SEPARATOR */}
              <div className="w-24 h-0.5 mb-4 bg-[#ff0000]"></div>
              
              <p className="text-white/90 text-md xl:text-lg mb-8 max-w-2xl">
                Start your journey with Fleet X Logistics. Immediate starts available for reliable, self-employed delivery drivers working with an Amazon Delivery Service Partner.
              </p>
              
           
            </div>
            
            <div className="relative overflow-hidden">
              <img
                src="/banner4.webp"
                alt="Fleet X Logistics Delivery Van"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Role – What to Expect */}
      <section className="container mx-auto  py-16 md:py-24">
        <div className="md:text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-medium">The Role</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What to Expect
          </h2>
          <p className=" max-w-3xl mx-auto">
            As a Delivery Driver with Fleet X Logistics, you are a key part of our operation and the face of our service. Working as an Amazon Delivery Service Partner, you will be delivering parcels safely and efficiently to customers across Havant and the wider Hampshire area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-black border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#ff0000]">A Typical Day</h3>
            
            <div className="space-y-6">
              {[
                {
                  time: "11:30 - 12:00 noon",
                  title: "Start Time",
                  desc: "Arrive at our Havant depot"
                },
                {
                  time: "11:45 - 12:15 PM",
                  title: "Loading",
                  desc: "Collect your pre-sorted route and load your electric Mercedes Sprinter van"
                },
                {
                  time: "12:15 - 1:00 PM",
                  title: "On the Road",
                  desc: "Follow the Amazon delivery app for navigation and delivery instructions"
                },
                {
                  time: "Late Evening",
                  title: "Finish",
                  desc: "Return the van to the depot once your route is completed"
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="shrink-0 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#ff0000]/40 transition">
                    <Image alt="img" width={12} height={12} src="/amazonvan.png" className="w-full h-auto object-cover p-2" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                    <p className="text-[#ff0000] text-sm mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-black border border-white/10 p-8">
            <h3 className="text-2xl font-bold mb-6 text-[#ff0000]">Full Paid Training</h3>
            <p className="text-white/90 mb-6">
              No previous delivery experience is required. We provide comprehensive training including:
            </p>
            
            <div className="space-y-4">
              {[
                "How to use the Amazon delivery app",
                "Safe van operation and EV handling",
                "Route efficiency and delivery best practices",
                "Customer service excellence",
                "Safety protocols and compliance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#ff0000]" />
                  <p className="text-white/80">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-white/5 border border-white/10">
              <p className="text-center font-semibold flex items-center gap-2">
  <img
    src="/amazonvan.png"
    alt="Amazon delivery van"
    className="w-10 h-auto"
  />
  We operate from our Havant depot and serve local delivery routes
</p>

            </div>
          </div>
        </div>
      </section>

      {/* What We Offer You */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="md:text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
              <span className="text-sm font-medium">Benefits</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What We Offer You
            </h2>
            <p className=" max-w-2xl mx-auto">
              We believe that when drivers are supported properly, everyone benefits. That's why we offer a clear, fair, and well-structured driver package.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[
              {
                icon: <Truck className="w-8 h-8" />,
                title: "Free Electric Van",
                desc: "Brand-new automatic electric Mercedes Sprinter provided for your route. No rental fees. No lease costs. No hidden charges."
              },
              {
                icon: <CreditCard className="w-8 h-8" />,
                title: "Competitive Weekly Pay",
                desc: "Transparent daily rates, paid weekly directly into your bank account."
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Bonuses & Incentives",
                desc: "Performance-based bonuses for safe driving and reliability. Earn additional income through our Driver Referral Scheme."
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: "Flexible Rota",
                desc: "We operate 7 days a week. Choose to work 4 to 6 days, with rotas built around your availability."
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Admin & VAT Support",
                desc: "We make self-employment simple by offering guidance with VAT registration and access to a user-friendly invoicing app."
              },
              {
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Full Support Team",
                desc: "Dedicated operations and support staff available to help you succeed on your routes."
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group relative bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform text-[#ff0000]">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">
                  {benefit.title}
                </h4>
                <p className="text-white/70 leading-relaxed">{benefit.desc}</p>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ff0000] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Checklist */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid xl:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
              <span className="text-sm font-medium">Requirements</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Do You Have What It Takes?
            </h2>
            <p className="text-white/90  mb-10">
              To meet safety, insurance, and Amazon compliance requirements, all applicants must meet the following criteria:
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { text: "21 years or older", subtext: "Age requirement" },
                { text: "Full UK/EU driving licence held for 1+ year", subtext: "Licence requirement" },
                { text: "Maximum 6 penalty points", subtext: "No IN10, DR10, DD, or CD endorsements" },
                { text: "Pass background & drug/alcohol test", subtext: "Amazon requirement" },
                { text: "Legal right to work in the UK", subtext: "Eligibility requirement" },
                { text: "Comfortable as self-employed", subtext: "Work type" },
              ].map((req, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white/5 p-4 border border-white/10">
                  <CheckCircle className="w-6 h-6 text-[#ff0000] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium">{req.text}</p>
                    <p className="text-white/60 text-sm mt-1">{req.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/banner2.webp"
              alt="Driver requirements checklist"
              className="w-full h-auto border border-white/10"
            />
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="md:text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                <span className="text-sm font-medium">Apply Now</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Fast-Track Application
              </h2>
              <p className="">
                Complete the short form below. Our recruitment team reviews applications daily and will contact you via WhatsApp or phone within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Phone Number *</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                    placeholder="07700 900123"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Home Postcode *</label>
                  <input
                    type="text"
                    name="postcode"
                    required
                    value={formData.postcode}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                    placeholder="PO9 1AB"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">UK/EU Licence 1+ Year? *</label>
                  <select
                    name="licence"
                    required
                    value={formData.licence}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">21 Years or Older? *</label>
                  <select
                    name="age"
                    required
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">More than 6 Points? *</label>
                  <select
                    name="points"
                    required
                    value={formData.points}
                    onChange={handleChange}
                    className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#ff0000] focus:outline-none transition"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Preferred Start Date *</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["ASAP", "In 2 weeks", "Other"].map((option) => (
                    <label
                      key={option}
                      className={`flex items-center justify-start lg:justify-center  p-2 lg:p-4 border cursor-pointer transition ${
                        formData.startDate === option
                          ? "border-[#ff0000]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <input
                        type="radio"
                        name="startDate"
                        value={option}
                        checked={formData.startDate === option}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#e20d0d] hover:bg-[#d12020] text-white font-bold py-4 px-6 text-lg transition"
              >
                Submit Application
              </button>
              
              <p className="text-center text-white/60 text-sm">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-6">
              Have a Question Before Applying?
            </h3>
            <p className="text-white/90  mb-10">
              Prefer to speak to us first? No problem. Our recruitment team is here to help.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition">
                <Phone className="w-12 h-12 text-[#ff0000] mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Call / WhatsApp</h4>
                <a 
                  href="tel:07454954265" 
                  className="text-xl font-bold hover:text-[#ff0000] transition"
                >
                  07454954265
                </a>
                <p className="text-white/70 mt-2">Available Mon-Sat, 8am-6pm</p>
              </div>
              
              <div className="bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition">
                <Mail className="w-12 h-12 text-[#ff0000] mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2">Email Us</h4>
                <a 
                  href="mailto:recruitment@fleetxlogistics.co.uk" 
                  className="text-md font-bold hover:text-[#ff0000] transition break-all"
                >
                  recruitment@fleetxlogistics.co.uk
                </a>
                <p className="text-white/70 mt-2">We respond within 24 hours</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-white/70">
                Need more info? Check out our{" "}
                <a href="/faqs" className="text-[#ff0000] hover:underline">
                  FAQs page
                </a>{" "}
                or return to{" "}
                <Link href="/" className="text-[#ff0000] hover:underline">
                  Home page
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;