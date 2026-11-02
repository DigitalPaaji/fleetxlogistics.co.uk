"use client";
import { useState } from "react";
import {
  ChevronDown,
  Phone,
  FileText,
  Car,
  Clock,
  Wallet,
  HelpCircle,
  MessageCircle,
  Truck,
  CheckCircle,
  Shield,
  Calendar,
  MapPin,
  Mail,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FAQPage = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };



  const faqData = [
    {
      title: "Requirements & Applying",
      icon: <FileText className="w-6 h-6 " />,
      color: "text-blue-400",
      questions: [
        {
          q: "Do I need previous delivery experience?",
          a: "No, previous delivery experience is not required. While courier experience is helpful, we provide full training for all new drivers. This includes how to use the delivery app, safe driving techniques for our electric vans, and customer service best practices. If you have the right attitude and a valid licence, we can teach you the rest."
        },
        {
          q: "What are the age and licence requirements?",
          a: "Due to insurance requirements, drivers must be 21 years or older and have held a full UK or EU driving licence for at least 1 year."
        },
        {
          q: "Can I apply if I have penalty points on my licence?",
          a: "Yes, we can accept drivers with up to 6 penalty points for minor offences such as speeding. However, we cannot accept applicants with serious endorsements including IN10 (No Insurance), DR10 (Drink Driving), or DD/CD codes."
        },
        {
          q: "Do I need a background check?",
          a: "Yes. As an Amazon Delivery Service Partner, all drivers must pass a standard DBS (criminal background check) and a drug & alcohol test before starting work."
        }
      ]
    },
    {
      title: "The Vehicle",
      icon: <Car className="w-6 h-6" />,
      color: "text-green-400",
      questions: [
        {
          q: "Do I need my own van?",
          a: "No. Fleet X Logistics provides a company van for your deliveries, so you do not need to own or rent a vehicle yourself."
        },
        {
          q: "Is there a rental fee for the van?",
          a: "No. The van is provided free of charge for your routes. There are no rental fees, no lease costs, and no hidden deductions from your pay."
        },
        {
          q: "What about insurance and maintenance?",
          a: "We take care of insurance, servicing, and vehicle maintenance. Drivers are responsible for driving safely and keeping the van clean and tidy."
        }
      ]
    },
    {
      title: "Hours & Pay",
      icon: <Wallet className="w-6 h-6" />,
      color: "text-yellow-400",
      questions: [
        {
          q: "What are the working hours?",
          a: "Shifts typically start around 12:00 PM (midday). This is mainly an afternoon and evening role, so there are no early morning starts. Shifts usually last around 9 hours, depending on route size and traffic conditions."
        },
        {
          q: "How does payment work?",
          a: "Drivers are paid weekly, directly into their bank account."
        },
        {
          q: "Is this an employed or self-employed role?",
          a: "This is a self-employed independent contractor role, giving you flexibility to choose your working days."
        },
        {
          q: "I've never been self-employed. Can you help?",
          a: "Yes. We regularly support drivers who are new to self-employment. We provide guidance with VAT registration (which can increase earnings) and give access to an easy-to-use invoicing app. We keep the admin side simple and stress-free."
        }
      ]
    },
    {
      title: "The Job",
      icon: <Truck className="w-6 h-6" />,
      color: "text-purple-400",
      questions: [
        {
          q: "Where will I be delivering?",
          a: "We operate from our Havant depot, with delivery routes covering surrounding areas in Hampshire. Wherever possible, we aim to keep drivers in consistent areas so routes become familiar."
        },
        {
          q: "How many parcels will I deliver each day?",
          a: "Parcel numbers vary depending on daily volume, but routes are planned to be completed within your shift time using Amazon's route optimisation system."
        },
        {
          q: "Can I choose which days I work?",
          a: "Yes. We operate 7 days a week and build weekly rotas based on driver availability. Reliability is important — if you confirm availability, we expect you to attend your shifts."
        }
      ]
    }
  ];
    const allQuestions = faqData.flatMap(category => category.questions);



  return (
    <>
      <Navbar/> 
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
      {/* FAQ Schema JSON-LD */}
  
      {/* Hero Section */}
      <section className="border-b border-gray-200/10 relative flex items-center justify-center py-24">
        <div className="relative z-10 w-full px-6 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
              <HelpCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6">
              Driver Questions
              <br />
              <span className="text-[#ff0000]">Answered</span>
            </h1>
            
            {/* SEPARATOR */}
            <div className="w-24 h-0.5 mb-4 bg-[#ff0000] mx-auto"></div>
            
            <p className="text-white/90 text-md  mb-8 max-w-2xl mx-auto">
              Everything you need to know about driving with Fleet X Logistics before you apply.
            </p>
            
            <div className="text-center w-fit mx-auto mt-8">
              <a
                href="/careers"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 transition flex items-center gap-2"
              >
                <Truck className="w-4 h-4" />
                View Driver Jobs
              </a>
           
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Categories & Questions */}
      {/* Main FAQ Section - Wagamama Style */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="">
         
           

            {/* Individual Accordion - Wagamama Style */}
            <div className="space-y-4">
              {allQuestions.map((item, index) => (
                <div 
                  key={index} 
                  className="border-b border-white/10 pb-4"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-6 text-left flex items-start justify-between transition-all duration-300 group"
                    itemProp="name"
                  >
                    <div className="flex items-start gap-4">
                      {/* <div className="mt-1">
                        <HelpCircle className="w-5 h-5 text-[#ff0000]" />
                      </div> */}
                      <div className="text-left">
                        <h3 className="text-lg md:text-xl font-bold mb-2 transition-colors">
                          {item.q}
                        </h3>
                        <div 
                          className={`overflow-hidden transition-all duration-300 ${
                            activeAccordion === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                          itemScope
                          itemType="https://schema.org/Answer"
                          itemProp="acceptedAnswer"
                        >
                          <p className="text-white/80 leading-relaxed pt-2" itemProp="text">
                            {item.a}
                          </p>
                        </div>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 shrink-0 mt-1 transform transition-transform duration-300 ${
                        activeAccordion === index ? 'rotate-180 text-[#ff0000]' : 'text-white/60'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>

            {/* Contact Banner */}
            <div className="mt-16 p-8 md:p-12 bg-linear-to-r from-black to-gray-900 border border-white/10">
              <div className="flex flex-wrap xl:flex-nowrap justify-between gap-8 items-start xl:items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-white/80 mb-6">
                    Our recruitment team is here to help answer any questions you might have about joining Fleet X Logistics.
                  </p>
                  <div className="space-x-6 space-y-3  w-full xl:w-[70%]">
                    <a 
                      href="tel:07454954265" 
                      className="inline-flex items-center gap-3 text-white hover:text-[#ff0000] transition"
                    >
                      <Phone className="w-5 h-5" />
                      <span className="font-medium">07454954265</span>
                    </a>
                    <a 
                      href="mailto:recruitment@fleetxlogistics.co.uk" 
                      className="inline-flex items-center gap-3 text-white hover:text-[#ff0000] transition"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">recruitment@fleetxlogistics.co.uk</span>
                    </a>
                  </div>
                </div>
                <div className=" w-fit xl:w-[30%]">
                  <a
                    href="https://wa.me/447763618300"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 xl:px-8 py-4 transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Key Points */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Full Training",
                  text: "No experience required"
                },
                {
                  icon: <Car className="w-8 h-8" />,
                  title: "Van Provided",
                  text: "Electric vans included"
                },
                {
                  icon: <Calendar className="w-8 h-8" />,
                  title: "Flexible Hours",
                  text: "Choose your working days"
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Weekly Pay",
                  text: "Direct bank transfers"
                }
              ].map((item, idx) => (
                <div key={idx} className="text-center group">
                  <div className="w-16 h-16 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <div className="text-[#ff0000]">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Still Have a Question?
            </h3>
            
            <p className="text-white/90  mb-10 max-w-2xl mx-auto">
              If we haven&apos;t answered something, feel free to message us on WhatsApp. If you're happy with what you've read, we'd love to have you join the team.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/447763618300"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 transition flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm">Chat on WhatsApp</div>
                  <div className="font-bold">07454954265</div>
                </div>
              </a>
              
              <a
                href="/careers#application-form"
                className="bg-[#e20d0d] hover:bg-[#d12020] text-white font-semibold px-8 py-4 transition flex items-center justify-center gap-3"
              >
                <FileText className="w-5 h-5" />
                Apply Now
              </a>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-[#ff0000]" />
                    Our Location
                  </h4>
                  <p className="text-white/80">
                    Fleet X Logistics operates from our Havant depot, serving delivery routes across Hampshire.
                  </p>
                </div>
                
                <div className="text-left">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#ff0000]" />
                    Quick Response
                  </h4>
                  <p className="text-white/80">
                    We typically respond to all enquiries within 24 hours, including weekends.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a href="/" className="text-white/70 hover:text-[#ff0000] transition">
                  ← Back to Home
                </a>
                <span className="text-white/30">•</span>
                <a href="/careers" className="text-white/70 hover:text-[#ff0000] transition">
                  View All Driver Jobs
                </a>
                <span className="text-white/30">•</span>
                <a href="tel:07454954265" className="text-white/70 hover:text-[#ff0000] transition">
                  Call: 07454954265
                </a>
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

export default FAQPage;