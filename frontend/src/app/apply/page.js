"use client";
import { useState } from "react";
import { CheckCircle, Truck, Clock, Shield, Zap, AlertCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ApplicationLandingPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    licence: "",
    age: "",
    postcode: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    licence: "",
    age: "",
    postcode: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      licence: "",
      age: "",
      postcode: "",
    };

    let isValid = true;

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
      isValid = false;
    }

    // Mobile validation
    const mobileRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!mobileRegex.test(formData.mobile.trim())) {
      newErrors.mobile = "Please enter a valid mobile number";
      isValid = false;
    } else if (formData.mobile.trim().replace(/[\s\-\(\)]/g, '').length < 10) {
      newErrors.mobile = "Mobile number must be at least 10 digits";
      isValid = false;
    }

    // Email validation (optional but validated if provided)
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
        isValid = false;
      }
    }

    // Licence validation
    if (!formData.licence) {
      newErrors.licence = "Please select an option";
      isValid = false;
    } else if (formData.licence === "no") {
      newErrors.licence = "You must have a UK/EU driving licence";
      isValid = false;
    }

    // Age validation
    if (!formData.age) {
      newErrors.age = "Please select an option";
      isValid = false;
    } else if (formData.age === "no") {
      newErrors.age = "You must be 21 years or older";
      isValid = false;
    }

    // Postcode validation (optional but validated if provided)
    // if (formData.postcode.trim()) {
    //   const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
    //   if (!postcodeRegex.test(formData.postcode.trim())) {
    //     newErrors.postcode = "Please enter a valid UK postcode";
    //     isValid = false;
    //   }
    // }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      licence: "",
      age: "",
      postcode: "",
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
          subject: "New Delivery Driver Application from Fleet X Logistics Website",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        
        // Show success toast
        toast.success("Application submitted successfully!");
        
        // Redirect to thank you page after 1.5 seconds
        setTimeout(() => {
          window.location.href = "/thank-you";
        }, 1500);
      } else {
        setErrors(prev => ({
          ...prev,
          general: result.message || "Failed to submit application. Please try again."
        }));
      }
    } catch (err) {
      console.error("Error sending application:", err);
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
    const { name, value } = e.target;
    
    // Validate individual field on blur
    if (name === "mobile" && value) {
      const mobileRegex = /^[\+]?[0-9\s\-\(\)]{10,15}$/;
      if (!mobileRegex.test(value.trim())) {
        setErrors(prev => ({
          ...prev,
          mobile: "Please enter a valid mobile number"
        }));
      } else if (value.trim().replace(/[\s\-\(\)]/g, '').length < 10) {
        setErrors(prev => ({
          ...prev,
          mobile: "Mobile number must be at least 10 digits"
        }));
      }
    }
    
    if (name === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({
          ...prev,
          email: "Please enter a valid email address"
        }));
      }
    }
    
    if (name === "postcode" && value) {
      const postcodeRegex = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;
      if (!postcodeRegex.test(value.trim())) {
        setErrors(prev => ({
          ...prev,
          postcode: "Please enter a valid UK postcode"
        }));
      }
    }
    
    if ((name === "firstName" || name === "lastName") && value) {
      if (value.trim().length < 2) {
        setErrors(prev => ({
          ...prev,
          [name]: `${name === "firstName" ? "First" : "Last"} name must be at least 2 characters`
        }));
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48 py-4">
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
      
      <main>
        {/* Hero Section - Above the fold on mobile */}
        <section className="px-4 py-6">
          <div className="max-w-4xl mx-auto">
            {/* H1 Headline */}
            <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
              Immediate Starts: Delivery Drivers Needed in Havant
            </h1>
            
            {/* Sub-headline */}
            <p className="text-white/90 mb-6">
              Earn weekly pay. Drive a brand new electric Mercedes Sprinter – provided FREE.
              <br />
              <span className="text-[#ff0000] font-semibold">No previous delivery experience required.</span>
            </p>

            {/* 3 Big Reasons - Icons directly above form */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold">FREE VAN</div>
                <div className="text-xs text-white/70">No rental fees or hidden charges</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold">WEEKLY PAY</div>
                <div className="text-xs text-white/70">Paid directly to your bank</div>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-1">✅</div>
                <div className="font-bold">FLEXIBLE ROTA</div>
                <div className="text-xs text-white/70">Choose 4-6 days per week</div>
              </div>
            </div>

            {/* APPLICATION FORM - VISIBLE FIRST ON MOBILE */}
            <div className="mb-8">
              <div className="text-center mb-4">
                <h2 className="text-xl font-bold mb-2">Fast-Track Registration</h2>
                <p className="text-white/80">
                  Enter your details below. Our recruitment team will call or WhatsApp you within 24 hours.
                </p>
              </div>

              {errors.general && (
                <div className="mb-4 p-3 bg-red-900/30 border border-red-700 rounded">
                  <p className="text-red-400 text-center text-sm">{errors.general}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name *"
                      value={formData.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-black/50 border ${
                        errors.firstName ? "border-white/10" : "border-white/10"
                      } px-3 py-2.5 focus:outline-none transition placeholder-white/50`}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name *"
                      value={formData.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full bg-black/50 border ${
                        errors.lastName ? "border-white/10" : "border-white/10"
                      } px-3 py-2.5 focus:outline-none transition placeholder-white/50`}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Phone Number *"
                    value={formData.mobile}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border ${
                      errors.mobile ? "border-white/10" : "border-white/10"
                    } px-3 py-2.5 focus:outline-none transition placeholder-white/50`}
                  />
                  {errors.mobile && (
                    <p className="mt-1 text-xs text-red-500">{errors.mobile}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address (optional)"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border ${
                      errors.email ? "border-white/10" : "border-white/10"
                    } px-3 py-2.5 focus:outline-none transition placeholder-white/50`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <select
                    name="licence"
                    value={formData.licence}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border ${
                      errors.licence ? "border-white/10" : "border-white/10"
                    } px-3 py-2.5 focus:outline-none transition appearance-none`}
                  >
                    <option value="">UK/EU Licence (1+ year)? *</option>
                    <option value="yes">Yes, I have a valid UK/EU licence</option>
                    <option value="no">No</option>
                  </select>
                  {errors.licence && (
                    <p className="mt-1 text-xs text-red-500">{errors.licence}</p>
                  )}
                </div>

                <div>
                  <select
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border ${
                      errors.age ? "border-white/10" : "border-white/10"
                    } px-3 py-2.5 focus:outline-none transition appearance-none`}
                  >
                    <option value="">21 years or older? *</option>
                    <option value="yes">Yes, I&apos;m 21 or older</option>
                    <option value="no">No</option>
                  </select>
                  {errors.age && (
                    <p className="mt-1 text-xs text-red-500">{errors.age}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="postcode"
                    placeholder="Postcode (optional)"
                    value={formData.postcode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border ${
                      errors.postcode ? "" : "border-white/10"
                    } px-3 py-2.5 focus:outline-none transition placeholder-white/50`}
                  />
                  {errors.postcode && (
                    <p className="mt-1 text-xs text-red-500">{errors.postcode}</p>
                  )}
                  <p className="mt-1 text-xs text-white/60">Optional - helps us understand your location</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-[#ff0000] hover:bg-[#d12020] text-white font-bold py-3.5 px-6 text-lg transition active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : isSubmitted ? "Submitted!" : "Get Started Now"}
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-white/10">
                <p className="text-center text-white/60 text-xs">
                  By applying, you agree to our Privacy Policy. We respect your data.
                </p>
              </div>
            </div>

            {/* WhatsApp Quick Apply */}
            <div className="mb-8">
              <a
                href="https://wa.me/447763618300"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Quick Apply via WhatsApp: 07454954265</span>
              </a>
            </div>

            {/* BELOW THE FOLD CONTENT - Only appears after scrolling */}
            <div className="space-y-6">
              {/* Why Drive With Us */}
              <div>
                <h3 className="text-lg font-bold mb-3">Why Drive With Fleet X Logistics?</h3>
                <p className="text-white/80 mb-4">
                  Fleet X Logistics is an official Amazon Delivery Service Partner based in Havant, Hampshire. We focus on fair treatment, clear pay, and long-term driver support.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff0000] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">No Experience Needed: Full training provided</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff0000] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Modern Technology: Automatic electric vans with advanced safety cameras</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#ff0000] mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Real Support: Help with VAT registration and simple invoicing tools</span>
                  </div>
                </div>
              </div>

              {/* Requirements Reminder */}
              <div className="bg-white/5 border border-white/10 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="w-5 h-5 text-[#ff0000]" />
                  <h4 className="font-bold">Requirements Reminder</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70">Minimum age: 21+</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70">Maximum 6 penalty points</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70">Pass background checks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70">Pass drug & alcohol tests</span>
                  </div>
                  <div className="col-span-2 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-[#ff0000] rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-white/70">Legal right to work in the UK</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Option */}
              <div className="items-center justify-center flex flex-wrap md:flex-nowrap gap-6">
                <div className="inline-flex items-center gap-2 text-white/70 mb-2">
                  <Phone className="w-4 h-4" />
                  <span>Prefer to speak to someone?</span>
                </div>
                <a 
                  href="tel:07454954265" 
                  className="inline-block bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold py-2 px-6 transition"
                >
                  Call: 07454954265
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/10 py-4 px-4 mt-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link className="mb-2" href={'/'}>
            <img 
              src="/logo.webp" 
              alt="Fleet X Logistics" 
              className="h-full w-32 mx-auto opacity-80"
              loading="lazy"
            />
          </Link>
          <div className="text-white/60 text-xs space-y-1">
            <div>Fleet X Logistics – Official Amazon Delivery Service Partner</div>
            <div>© {new Date().getFullYear()} Fleet X Logistics Ltd.</div>
            <div>
              <a 
                href="/privacy-policy" 
                className="hover:text-white transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ApplicationLandingPage;