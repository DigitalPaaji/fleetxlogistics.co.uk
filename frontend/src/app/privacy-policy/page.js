"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-24 xl:px-32 py-12 md:py-24">
        
        <div className=" mx-auto space-y-12">

          {/* Header / Intro */}
          <div className="border-b border-white/10 pb-8">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="w-20 h-1 bg-[#ff0000] mb-6"></div>
            <p className="text-lg text-white/90 font-medium mb-2">Fleet X Logistics Ltd</p>
            <p className="text-white/80 leading-relaxed">
              Fleet X Logistics Ltd (“we”, “us”, “our”) respects your privacy and is committed to protecting your personal data. 
              This policy explains how we collect and use your information when you visit our website or apply for work with us.
            </p>
          </div>

          {/* Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
            <div className="bg-white/5 p-6 rounded-lg border-l-4 border-[#ff0000]">
              <p className="mb-4 text-white/80">We may collect:</p>
              <ul className="grid md:grid-cols-2 gap-2 text-white/80 list-disc list-inside">
                <li>Name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Application details</li>
                <li>IP address and basic device data</li>
              </ul>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
            <ul className="space-y-3 text-white/80 mb-6">
              <li className="flex items-start">
                <span className="text-[#ff0000] mr-2">➜</span> Driver recruitment and applications
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0000] mr-2">➜</span> Contacting you by phone, email, or WhatsApp
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0000] mr-2">➜</span> Onboarding and compliance checks
              </li>
              <li className="flex items-start">
                <span className="text-[#ff0000] mr-2">➜</span> Legal and operational purposes
              </li>
            </ul>
            <p className="text-white/60 text-sm italic border-t border-white/10 pt-3 inline-block">
              We do not sell your personal data.
            </p>
          </section>

          {/* WhatsApp & Sharing Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* WhatsApp */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-white">WhatsApp Applications</h2>
              <p className="text-white/80 text-sm leading-relaxed">
                If you apply via WhatsApp, your information is processed through WhatsApp’s platform in line with their privacy policy. We only use this data for recruitment purposes.
              </p>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="text-xl font-bold mb-4 text-white">Sharing Your Information</h2>
              <p className="text-white/80 text-sm mb-2">Shared only when necessary with:</p>
              <ul className="text-white/80 text-sm space-y-1 list-disc list-inside">
                <li>Amazon systems (onboarding)</li>
                <li>Recruitment/Compliance providers</li>
                <li>Professional advisers (legal)</li>
              </ul>
            </section>
          </div>

          {/* Storage & Retention */}
          <section className="bg-white/5 p-6 rounded-lg">
            <div className="mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Data Storage & Security</h3>
              <p className="text-white/80 text-sm">
                We store your data securely and take reasonable steps to protect it from unauthorised access or misuse.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Data Retention</h3>
              <p className="text-white/80 text-sm">
                We keep your data only for as long as needed for recruitment, compliance, or legal reasons.
              </p>
            </div>
          </section>

          {/* Your Rights & Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
            <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
              <div className="flex-1">
                <p className="text-white/80 mb-3">You have the right to:</p>
                <ul className="list-disc list-inside text-white/80 space-y-1">
                  <li>Access your data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                </ul>
              </div>
              
              <div className="bg-[#ff0000]/10 p-6 rounded border border-[#ff0000]/30 w-full md:w-auto">
                <p className="text-white/70 text-sm mb-1 uppercase tracking-wider">To make a request:</p>
                <a href="mailto:contact@fleetxlogistics.co.uk" className="text-xl font-medium text-white hover:text-[#ff0000] transition">
                  contact@fleetxlogistics.co.uk
                </a>
              </div>
            </div>
          </section>

          {/* Updates & Navigation */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/50 text-sm">
              Updates: This policy may be updated occasionally. <br />
              Last version available on our website.
            </p>
            <div className="flex gap-4">
               <a href="/" className="text-sm font-semibold text-white hover:text-[#ff0000] transition">Home</a>
               <span className="text-white/30">|</span>
               <a href="/careers" className="text-sm font-semibold text-white hover:text-[#ff0000] transition">Careers</a>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;