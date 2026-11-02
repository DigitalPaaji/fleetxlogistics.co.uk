"use client";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Building,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Enquiry",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    };

    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation (optional but must be valid if provided)
    if (formData.phone.trim()) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = "Please enter a valid phone number";
        isValid = false;
      } else if (formData.phone.trim().replace(/[\s\-\(\)]/g, '').length < 10) {
        newErrors.phone = "Phone number must be at least 10 digits";
        isValid = false;
      }
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to your Node API
      const response = await fetch("http://localhost:8002/sendmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formdata: formData,
          sendto: ["Contact@fleetxlogistics.co.uk"],
          subject: "New General Enquiry from Fleet X Logistics Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        
        // Reset the form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "General Enquiry",
          message: "",
        });
        
        // Show success toast
        toast.success("Message sent successfully!");
       
      } else {
        // Show error in form field for API errors
        setErrors(prev => ({
          ...prev,
          general: result.message || "Failed to send email. Please try again."
        }));
      }
    } catch (err) {
      console.error("Error sending email:", err);
      setErrors(prev => ({
        ...prev,
        general: "Something went wrong. Please try again later."
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    // Validate individual field on blur
    if (name === "email" && formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setErrors(prev => ({
          ...prev,
          email: "Please enter a valid email address"
        }));
      }
    }
    
    if (name === "phone" && formData.phone) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        setErrors(prev => ({
          ...prev,
          phone: "Please enter a valid phone number"
        }));
      } else if (formData.phone.trim().replace(/[\s\-\(\)]/g, '').length < 10) {
        setErrors(prev => ({
          ...prev,
          phone: "Phone number must be at least 10 digits"
        }));
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white">
        <ToastContainer 
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-gray-200/10 py-24 md:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-linear-to-r from-black via-black/90 to-black/80"></div>
            <Image
              width={1200}
              height={1200}
              src="/10.webp"
              alt="Fleet X Logistics contact"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
                <Mail className="w-4 h-4 text-[#ff0000]" />
                <span className="text-sm font-medium">
                  We&apos;re Here to Help
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Get in Touch
              </h1>

              <div className="w-24 h-0.5 mb-6 bg-[#ff0000] mx-auto"></div>

              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Have a question or need more information? The Fleet X Logistics
                team is here to help.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="mx-auto">
              <div className="grid md:grid-cols-3 gap-8 mb-20">
                {/* Recruitment Enquiries */}
                <div className="bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition group">
                  <div className="w-14 h-14 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-[#ff0000]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    Recruitment Enquiries
                  </h3>
                  <p className="text-white/80 mb-6">
                    Looking to join Fleet X Logistics as a delivery driver? The
                    fastest way to apply is via our Careers page.
                  </p>

                  <div className="space-y-4">
                    <a
                      href="/careers"
                      className="inline-flex items-center gap-2 text-[#ff0000] hover:text-[#ff0000]/80 transition font-semibold group"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      Link to Careers Page
                    </a>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-3 text-white/80">
                        <MessageCircle className="w-4 h-4 text-green-500" />
                        <div>
                          <div className="font-medium">WhatsApp:</div>
                          <a
                            href="https://wa.me/447763618300"
                            className="hover:text-[#ff0000] transition"
                          >
                            07454954265
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* General Enquiries */}
                <div className="bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition group">
                  <div className="w-14 h-14 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Building className="w-6 h-6 text-[#ff0000]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">General Enquiries</h3>
                  <p className="text-white/80 mb-6">
                    For business enquiries, partnerships, suppliers, or general
                    questions.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#ff0000] mt-1 shrink-0" />
                      <div>
                        <div className="font-medium">Email:</div>
                        <a
                          href="mailto:contact@fleetxlogistics.co.uk"
                          className="hover:text-[#ff0000] transition break-all"
                        >
                          contact@fleetxlogistics.co.uk
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#ff0000] mt-1 shrink-0" />
                      <div>
                        <div className="font-medium">Phone:</div>
                        <a
                          href="tel:07454954265"
                          className="hover:text-[#ff0000] transition"
                        >
                          07454954265
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Our Location */}
                <div className="bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition group">
                  <div className="w-14 h-14 bg-[#ff0000]/10 border border-[#ff0000]/20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#ff0000]" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">Our Location</h3>
                  <p className="text-white/80 mb-6">
                    We operate from Havant and serve delivery routes across
                    Hampshire.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#ff0000] mt-1 shrink-0" />
                      <div>
                        <div className="font-medium">Depot Area:</div>
                        <div className="text-white/70">Havant, Hampshire</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-[#ff0000] mt-1 shrink-0" />
                      <div>
                        <div className="font-medium">Office Support Hours:</div>
                        <div className="text-white/70">
                          Monday – Sunday
                          <br />
                          9:00 AM – 6:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* General Contact Form */}
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                    <Send className="w-4 h-4" />
                    <span className="text-sm font-medium">Send a Message</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Send a Message
                  </h2>

                  <p className="text-white/80">
                    This form is for general enquiries only.
                    <br />
                    If you are applying for a delivery driver role, please use our{" "}
                    <a href="/careers" className="text-[#ff0000] hover:underline">
                      Careers page
                    </a>{" "}
                    for a faster response.
                  </p>
                </div>

                {errors.general && (
                  <div className="mb-6 p-4 bg-red-900/30 border border-red-700 rounded">
                    <p className="text-red-400 text-center">{errors.general}</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6 p-4 md:px-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-black border ${
                          errors.name ? "border-red-500" : "border-white/10"
                        } px-4 py-3 focus:outline-none transition`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-black border ${
                          errors.email ? "border-red-500" : "border-white/10"
                        } px-4 py-3 focus:outline-none transition`}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="mt-2 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number (optional)
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full bg-black border ${
                          errors.phone ? "border-red-500" : "border-white/10"
                        } px-4 py-3 focus:outline-none transition`}
                        placeholder="07700 900123"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-500">{errors.phone}</p>
                      )}
                      <p className="mt-2 text-sm text-white/60">
                        Optional - include if you&apos;d prefer a call back
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-black border border-white/10 px-4 py-3 focus:outline-none transition"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Payroll Question">Payroll Question</option>
                        <option value="Business Proposal">
                          Business Proposal
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows="6"
                      className={`w-full bg-black border ${
                        errors.message ? "border-red-500" : "border-white/10"
                      } px-4 py-3 focus:outline-none transition resize-none`}
                      placeholder="How can we help you?"
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-500">{errors.message}</p>
                    )}
                    <p className="mt-2 text-sm text-white/60">
                      Please provide detailed information about your enquiry
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#e20d0d] hover:bg-[#d12020] text-white font-bold py-4 px-6 text-lg transition flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting || isSubmitted}
                  >
                    <Send className="w-5 h-5" />
                    {isSubmitting ? "Sending..." : isSubmitted ? "Sent!" : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Office Location / Map Section */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className="container mx-auto px-6">
            <div className="mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 mb-6">
                    <MapPin className="w-4 h-4 text-[#ff0000]" />
                    <span className="text-sm font-medium">Our Location</span>
                  </div>

                  <h3 className="text-3xl font-bold mb-6">Where We Are</h3>

                  <div className="space-y-4 text-white/80">
                    <p className="">
                      Our main operations hub is based in Havant, Hampshire. While
                      our delivery drivers are on the road serving customers
                      across the region, our support team operates from this
                      location to ensure smooth day-to-day operations.
                    </p>
                    <p>
                      We serve communities across Hampshire, providing reliable
                      last-mile delivery services to residential and business
                      customers.
                    </p>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#ff0000]" />
                      <div>
                        <div className="font-semibold">Service Area:</div>
                        <div className="text-white/70">
                          Havant & Hampshire Region
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-[#ff0000]" />
                      <div>
                        <div className="font-semibold">Operation:</div>
                        <div className="text-white/70">
                          Amazon Delivery Service Partner
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border border-white/10 bg-white/5">
                  <div className="relative h-96 w-full overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25000.562132068855!2d-1.0062810679438172!3d50.86042957593823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4874435154c383b3%3A0x277f8ea3cc382bb1!2sHavant%2C%20UK!5e1!3m2!1sen!2sin!4v1768906161093!5m2!1sen!2sin"
                      width="600"
                      height="450"
                      className="w-full h-full"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - Legal Information */}
        <section className="py-12 border-t border-white/10">
          <div className="container mx-auto px-6">
            <div className="mx-auto">
              <div className="text-center text-white/70">
                <h4 className="text-lg font-semibold mb-6">
                  Registered Office Details
                </h4>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                  <div>
                    <div className="font-medium text-white mb-1">
                      Company Name
                    </div>
                    <div>Fleet X Logistics Ltd</div>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">Trading As</div>
                    <div>Fleet X Logistics</div>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">
                      Registered In
                    </div>
                    <div>England & Wales</div>
                  </div>
                  <div>
                    <div className="font-medium text-white mb-1">
                      Contact Email
                    </div>
                    <a
                      href="mailto:contact@fleetxlogistics.co.uk"
                      className="hover:text-[#ff0000] transition"
                    >
                      contact@fleetxlogistics.co.uk
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <div className="flex flex-wrap justify-center gap-6">
                    <Link href="/" className="hover:text-[#ff0000] transition">
                      Home
                    </Link>
                    <span className="text-white/30">•</span>
                    <Link
                      href="/about"
                      className="hover:text-[#ff0000] transition"
                    >
                      About Us
                    </Link>
                    <span className="text-white/30">•</span>
                    <Link
                      href="/careers"
                      className="hover:text-[#ff0000] transition"
                    >
                      Careers
                    </Link>
                    <span className="text-white/30">•</span>
                    <a href="/faqs" className="hover:text-[#ff0000] transition">
                      FAQs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;