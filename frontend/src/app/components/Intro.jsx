"use client";
import {
  Users,
  TrendingUp,
  Star,
  BarChart3,
  Shield,
  PieChart,
  Clock,
  CheckCircle,
} from "lucide-react";
import Image from "next/image";

const MonetaLandingPage = () => {
  const scrollToWhy = () => {
    const el = document.getElementById("why-fleet");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48 ">
      {/* Hero Banner */}

      <section className="border-b border-gray-200/10 relative flex items-center justify-center bg-cover bg-center py-24">

        <div className="relative z-10  w-full py-12 ">    
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
            <div className="text-left">
         
              <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Delivery Driver Jobs Portsmouth 
                <br />
                With Fleet X Logistics.
              </h2>
                        
          {/* SEPARATOR */}
          <div className="w-24 h-0.5 mb-4 bg-[#ff0000] "></div>
          
              <p className="text-white/90 text-md  mb-8 max-w-2xl">
             <b> Delivery driver jobs Portsmouth </b> are in high demand, and Fleet X Logistics offers a reliable, well-supported route into delivery work across Hampshire. We are an official Amazon Delivery Service Partner operating from the Havant area, and we focus on driver recruitment with clear expectations, consistent work, and real support from day one.
<br /><br />
Our aim is simple: provide a professional setup where drivers can work confidently. That means modern vehicles, organised processes, and a team that communicates clearly. If you’re looking for delivery driver work with weekly pay and flexible rotas, Fleet X Logistics is built around what drivers actually need.
<br /><br />
At Fleet X Logistics, we understand that most applicants want the same things: stable work, fair treatment, and clarity around earnings. That is why our delivery driver jobs portsmouth are structured to reduce common frustrations such as unclear deductions, poor support, or complicated onboarding.

   </p>
     
            </div>
            <div className=" ">
              <div className="relative overflow-hidden ">
                <Image
                width={440}
                height={440}
                  src="/banner5.webp"
                  alt="Fleet X Logistics Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      {/* Why Choose Us */}
      <section id="why-fleet" className=" mx-auto py-16 md:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2  bg-white/10 border border-white/20 mb-6">
            <span className="text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Drivers Choose
{" "}
            <span className="text-[#ff0000]">Fleet X Logistics</span>?
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
           Choosing the right company matters. We work hard to keep things clear and professional so drivers can focus on delivering safely and earning consistently.
<br /> Key reasons drivers join Fleet X Logistics:

          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[
            {
              icon: "/amazonvan.png",
              title: "Free Company Vans",
              desc: " Free company van provided (no rental fees / no lease costs) Modern automatic electric Mercedes Sprinter vans, fully maintained.",
            },
            {
              icon: "/pay.png",
              title: "Clear Weekly Pay",
              desc: "Clear daily rate structure with weekly payments Competitive daily rates paid weekly. Guidance for VAT-registered drivers.",
            },
            {
              icon: "/work.png",
              title: "Flexible Working Days",
              desc: " Flexible rota options (work 4–6 days, depending on availability) Work up to 6 days per week. Midday start, evening finish routes.",
            },
            {
              icon: "/path.png",
              title: "Consistent Routes",
              desc: "Consistent delivery areas across Hampshire Year-round work with Amazon in familiar delivery areas.",
            },
            {
              icon: "/support.png",
              title: "Full Support",
              desc: "Support with self-employment admin, including VAT guidance Help with self-employment setup, VAT, and invoicing.",
            },
            {
              icon: "/technology.png",
              title: "Modern Technology",
              desc: " Respectful management and clear communication Easy-to-use apps for route planning and communication.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-black border border-white/10 p-8 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <Image width={440} height={440} className="w-14 h-14 p-2 bg-white/5 border border-white/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform"
                src={feature.icon} alt="img"
              />
              <h4 className="text-xl font-bold mb-4 text-white">
                {feature.title}
              </h4>
              <p className="text-white/70 leading-relaxed">{feature.desc}</p>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#ff0000] group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

            {/* Driver Requirements & CTA */}
      <section className="py-16">
        <div className="bg-black border-y border-white/10 py-8 md:py-12">
          <div className="grid xl:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 pb-6 border-b border-white/10">
               Requirements to Apply

              </h2>
              <p className=" text-md xl:text-lg mb-10">
                To meet safety and compliance requirements, applicants must meet the following:

                <br />
                <br />
                <span className="text-[#ff0000] font-bold">
                  No previous delivery experience required. Full training
                  provided.
                </span> <br /><br />
                These requirements apply across our recruitment areas, including delivery driver jobs havant, delivery driver jobs waterlooville, and delivery driver jobs portchester.

              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Minimum age 21+",
                  "Full UK/EU driving licence held at least 1 year",
                  "Maximum 6 penalty points",
                  "Legal right to work in the UK",
                  "Willing to complete background and drug & alcohol checks",
                ].map((req, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#ff0000] shrink-0 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white/90">{req}</p>
                  </div>
                ))}
              </div>
             
            </div>
            <div className="">
              <Image
              width={440}
              height={440}
                src="/banner4.webp"
                alt="Driver at work"
                className=" w-full h-75 lg:h-auto object-contain"
              />
             
            
            </div>
          </div>
        </div>
      </section>
{/* new */}
      <section className="border-b border-gray-200/10 relative flex items-center justify-center bg-cover bg-center py-12">
  <div className="relative z-10 w-full py-12">
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center">
      {/* Left side - Image */}
      <div className="relative overflow-hidden">
        <Image
          width={440}
          height={440}
          src="/9.webp" /* Replace with your Havant-specific image if available */
          alt="Fleet X Logistics Havant Delivery Driver"
          className="w-full h-75 lg:h-auto object-contain"
        />
      </div>

      {/* Right side - Content */}
      <div className="text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Delivery Driver Jobs Havant
          <br />
          With Real Local Support.
        </h2>
        
        {/* SEPARATOR */}
        <div className="w-24 h-0.5 mb-4 bg-[#ff0000]"></div>
        
        <p className="text-white/90 text-md mb-8 max-w-2xl">
          <b>Delivery driver jobs Havant</b> are ideal for drivers who want consistent work close to home, and Fleet X Logistics is positioned perfectly for routes across Havant and the surrounding areas. As a local operator, we understand Hampshire routes well and aim to keep drivers in familiar delivery zones wherever possible.
          <br /><br />
          Many drivers choose delivery driver jobs Havant because it reduces commuting time and helps build confidence quickly. When you deliver in consistent areas, you learn the streets, improve your pace naturally, and feel more in control of your working day.
          <br /><br />
          With Fleet X Logistics, delivery driver jobs Havant come with proper onboarding and a straightforward process. We explain the role clearly, provide training, and support drivers who are new to self-employment, invoicing, and VAT.
        </p>

        {/* Features List */}
        <div className="space-y-4 mt-8">
          <div className="flex items-start">
            <div className="shrink-0 mr-3 mt-1">
              <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
            </div>
            <p className="text-white/90"><b>Afternoon start patterns</b> (typically around midday)</p>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 mr-3 mt-1">
              <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
            </div>
            <p className="text-white/90"><b>Local route planning</b> across Hampshire areas</p>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 mr-3 mt-1">
              <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
            </div>
            <p className="text-white/90"><b>Clear guidance</b> during onboarding and training</p>
          </div>
          
          <div className="flex items-start">
            <div className="shrink-0 mr-3 mt-1">
              <div className="w-2 h-2 bg-[#ff0000] rounded-full"></div>
            </div>
            <p className="text-white/90"><b>Supportive operations team</b> available when needed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>








   <section className="py-16 md:py-24 border-b border-gray-200/10">
  <div className="px-4 sm:px-6 lg:px-8">
    
    {/* Delivery Areas Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
       <div className="relative">
        <div className="relative overflow-hidden">
          <Image
            width={600}
            height={400}
            src="/banner.webp" /* Replace with Hampshire map or delivery area image */
            alt="Hampshire Delivery Areas Map - Fleet X Logistics Coverage"
            className="w-full h-75 lg:h-auto object-contain"
          />
        </div>
      </div>
      <div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          Delivery Areas We Cover
          <br />
          <span className="text-[#ff0000]">Across Hampshire</span>
        </h2>
        
        <div className="w-24 h-0.5 mb-6 bg-[#ff0000]"></div>
        
        <p className="text-white/90 mb-4">
          We recruit across Havant and nearby areas so we can build a strong local driver base.
        </p>
        
        <div className="space-y-3">
          <div className="group p-3 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-bold mb-2 ">• delivery driver jobs waterlooville</h3>
            <p className="text-white/80">For drivers based north of Havant who want local route options</p>
          </div>
          
          <div className="group p-3 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-bold mb-2 ">• delivery driver jobs portchester</h3>
            <p className="text-white/80">For drivers looking for consistent work near Portchester / Fareham areas</p>
          </div>
          
          <div className="group p-3 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-lg font-bold mb-2 ">• courier jobs hampshire</h3>
            <p className="text-white/80">For applicants searching broadly for parcel delivery work across Hampshire</p>
          </div>
        </div>
        
        <p className="text-white/70 text-sm italic mt-5 p-4 border-l-2 border-[#ff0000] bg-white/5">
          We include these locations naturally because most candidates search by town name. This supports local SEO and improves the quality of applications we receive.
        </p>
      </div>
      
   
    </div>
    
    {/* Divider */}
    <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-16"></div>
    
    {/* Typical Day Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div className="order-1 md:order-2">
        <div className="relative overflow-hidden">
          <Image
            width={600}
            height={400}
            src="/banner01.webp" /* Replace with driver daily routine image */
            alt="Typical Day for Fleet X Logistics Driver"
            className="w-full h-75 lg:h-auto object-contain"
          />
        </div>
      </div>
      
      <div className="order-2 md:order-1">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
          What the Job Looks Like
          <br />
          <span className="text-white/90">Typical Day</span>
        </h2>
        
        <div className="w-24 h-0.5 mb-4 bg-[#ff0000]"></div>
        
        <p className="text-white/90 mb-4">
          A typical day for our drivers is structured and straightforward, helping you manage your time effectively.
        </p>
        
        <div className="space-y-4">
          <div className="flex items-start bg-white/5 p-4 rounded border border-white/10">
            <div className="shrink-0 mr-4 mt-1">
              <div className="w-6 h-6 rounded-full bg-[#ff0000]/20 flex items-center justify-center">
                <span className="text-sm font-bold text-[#ff0000]">1</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Arrive at depot around 12:00 PM</h4>
              <p className="text-white/80 text-sm">Parcels are prepared and organised for loading</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/5 p-2 rounded border border-white/10">
            <div className="shrink-0 mr-4 mt-1">
              <div className="w-6 h-6 rounded-full bg-[#ff0000]/20 flex items-center justify-center">
                <span className="text-sm font-bold text-[#ff0000]">2</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Load your route</h4>
              <p className="text-white/80 text-sm">Use the delivery app for navigation and instructions</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/5 p-2 rounded border border-white/10">
            <div className="shrink-0 mr-4 mt-1">
              <div className="w-6 h-6 rounded-full bg-[#ff0000]/20 flex items-center justify-center">
                <span className="text-sm font-bold text-[#ff0000]">3</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Deliver safely and efficiently</h4>
              <p className="text-white/80 text-sm">Complete deliveries across your designated route</p>
            </div>
          </div>
          
          <div className="flex items-start bg-white/5 p-2 rounded border border-white/10">
            <div className="shrink-0 mr-4 mt-1">
              <div className="w-6 h-6 rounded-full bg-[#ff0000]/20 flex items-center justify-center">
                <span className="text-sm font-bold text-[#ff0000]">4</span>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Return to depot in the evening</h4>
              <p className="text-white/80 text-sm">Once your route is complete, finish for the day</p>
            </div>
          </div>
        </div>
        
        <p className="text-white/80 mt-8 p-2 bg-black/30 border border-white/10 rounded">
          <span className="font-bold">Note:</span> This routine helps drivers manage their day and plan their week. For candidates looking for delivery driver jobs Portsmouth, knowing the pattern and expectations upfront builds trust.
        </p>
      </div>
    </div>
    
    {/* Divider */}
    <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-16"></div>
    
    {/* No Experience Needed Section */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
        No Experience Needed
        <br />
        <span className="text-[#ff0000]">Training Provided</span>
      </h2>
      
      <div className="w-24 h-0.5 bg-[#ff0000] mx-auto mb-8"></div>
      
      <p className="text-white/90 ">
        Not everyone applying has delivery experience, and that&apos;s fine. We provide full training and support so new drivers can start confidently.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <div className="group p-6 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={40} height={40} src="/app.png" alt="img" />
          </div>
          <h4 className="text-xl font-bold mb-3">Delivery App Training</h4>
          <p className="text-white/80 text-sm">How to use the delivery app properly and efficiently</p>
        </div>
        
        <div className="group p-6 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-2">
        <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={40} height={40} src="/hands.png" alt="img" />
          </div>
          <h4 className="text-xl font-bold mb-3">Safe Driving Practices</h4>
          <p className="text-white/80 text-sm">Best practices for safety and efficiency on route</p>
        </div>
        
        <div className="group p-6 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-2">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={40} height={40} src="/route.png" alt="img" />
          </div>
          <h4 className="text-xl font-bold mb-3">Route Efficiency</h4>
          <p className="text-white/80 text-sm">How to improve your delivery efficiency over time</p>
        </div>
        
        <div className="group p-6 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={44} height={44} src="/comunication.png" alt="img" />
          </div>
          <h4 className="text-xl font-bold mb-3">Customer Service Basics</h4>
          <p className="text-white/80 text-sm">Professional interaction during deliveries</p>
        </div>
      </div>
      
      <div className="p-8 border border-[#ff0000]/30 bg-linear-to-r from-black/50 to-[#ff0000]/5 rounded-lg max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
        <p className="text-white/90 mb-6">
          If you are reliable, polite, and willing to learn, you can succeed in delivery driver jobs Portsmouth with Fleet X Logistics.
        </p>
        <a 
          href="/apply" 
          className="inline-flex items-center justify-center px-8 py-3 bg-[#ff0000] text-white font-bold hover:bg-[#cc0000] transition-colors duration-300"
        >
          Apply Now
        </a>
      </div>
    </div>
  </div>
</section>


<section className="py-16 md:py-24 border-b border-gray-200/10">
  <div className=" mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Earnings & Payment Section */}
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-3">
          Earnings & Payment
          <br />
          <span className="text-[#ff0000]">Kept Clear & Transparent</span>
        </h2>
        
        <div className="w-24 h-0.5 mb-3 bg-[#ff0000]"></div>
        
        <p className="text-white/90 mb-4">
          Drivers want transparency around pay. We keep this simple and clear, without unrealistic claims or hidden surprises.
        </p>
        
        <div className="space-y-4">
          <div className="group px-4 py-2 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-black/50 to-transparent">
            <div className="flex items-start">
              <div className="shrink-0 mr-4 mt-1">
                  <div className="w-14 h-14 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={44} height={44} src="/week.png" alt="img" />
          </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Daily Rates, Weekly Pay</h3>
                <p className="text-white/80">Competitive daily rates paid directly into your bank account every week. No waiting for monthly payments.</p>
              </div>
            </div>
          </div>
          
          <div className="group px-4 py-2 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-black/50 to-transparent">
            <div className="flex items-start">
              <div className="shrink-0 mr-4 mt-1">
                                 <div className="w-14 h-14 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={40} height={40} src="/vat.png" alt="img" />
          </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">VAT-Registered Drivers</h3>
                <p className="text-white/80">VAT-registered drivers may earn more. We provide full guidance and support for VAT registration and invoicing.</p>
              </div>
            </div>
          </div>
          
          <div className="group px-4 py-2 border border-white/10 hover:border-[#ff0000]/40 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-r from-black/50 to-transparent">
            <div className="flex items-start">
              <div className="shrink-0 mr-4 mt-1">
                             <div className="w-14 h-14 mx-auto mb-4 bg-white/80 rounded-full flex items-center justify-center">
<Image width={44} height={44} src="/guarantee.png" alt="img" />
          </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Performance Incentives</h3>
                <p className="text-white/80">Additional earnings through performance incentives based on reliability, safe driving, and route efficiency.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 p-5 border-l-4 border-[#ff0000] bg-black/30">
          <p className="text-white/80 italic">
            This transparency supports the main search intent behind <span className="font-bold">delivery driver jobs Portsmouth</span> and improves conversion because applicants see clarity without unrealistic claims.
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="relative overflow-hidden rounded-lg border border-white/10">
          <Image
            width={600}
            height={400}
            src="/banner2.webp" /* Replace with payment/earnings related image */
            alt="Clear Earnings & Payment Structure - Fleet X Logistics"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    
    {/* Divider */}
    <div className="w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-16"></div>
    
    {/* Final CTA Section */}
    <div className="text-center py-12">
      <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
        Apply Today for Delivery Work
        <br />
        <span className="text-[#ff0000]">Portsmouth & Hampshire</span>
      </h2>
      
      <div className="w-24 h-0.5 bg-[#ff0000] mx-auto mb-8"></div>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-white/90 text-lg mb-8">
          If you&apos;re searching for <span className="font-bold text-white">delivery driver jobs in Portsmouth</span> and want a professional team, consistent work, and real support, Fleet X Logistics is ready to speak with you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          <div className="p-4 border border-white/10 bg-white/5">
            <p className=" font-bold">delivery driver jobs havant</p>
          </div>
          <div className="p-4 border border-white/10 bg-white/5">
            <p className=" font-bold">delivery driver jobs waterlooville</p>
          </div>
          <div className="p-4 border border-white/10 bg-white/5">
            <p className=" font-bold">delivery driver jobs portchester</p>
          </div>
        </div>
        
        <p className="text-white/90 text-lg mb-6">
          We also recruit across nearby towns, including all Hampshire areas, and welcome applicants looking for <span className="font-bold text-white">courier jobs hampshire</span>.
        </p>
        
        <div className="p-6 border border-white/20 bg-linear-to-r from-black/50 to-[#ff0000]/5 rounded-lg max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold mb-4">We Provide, You Deliver</h3>
          <p className="text-white/90 ">
            We provide the tools, vehicles, training, and support.
            <br />
            <span className="text-white font-bold">You bring</span> reliability, commitment, and a positive attitude.
          </p>
        </div>
      </div>
      
      {/* Strong Apply Now CTA */}
      <div className="space-y-6">
        <div>
          <a 
            href="apply" 
            className="inline-flex items-center justify-center px-10 py-4 bg-[#ff0000] text-white font-bold text-lg hover:bg-[#cc0000] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Apply Now for Delivery Driver Jobs</span>
            <svg className="ml-3 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </a>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a 
            href="/careers" 
            className="px-6 py-3 border border-white/20 text-white hover:border-[#ff0000] hover:text-[#ff0000] transition-all duration-300"
          >
            View All Careers
          </a>
          <a 
            href="apply" 
            className="px-6 py-3 border border-white/20 text-white hover:border-[#ff0000] hover:text-[#ff0000] transition-all duration-300"
          >
            Application Process
          </a>
          <a 
            href="/faqs" 
            className="px-6 py-3 border border-white/20 text-white hover:border-[#ff0000] hover:text-[#ff0000] transition-all duration-300"
          >
            FAQ
          </a>
          <a 
            href="/contact" 
            className="px-6 py-3 border border-white/20 text-white hover:border-[#ff0000] hover:text-[#ff0000] transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
        
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-white/70 text-sm">
            <span className="text-white font-bold">Next Step:</span> Click "Apply Now" to start your application, or explore our other sections for more information.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Interviews typically scheduled within 3-5 business days. Ready to start within 1-2 weeks.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default MonetaLandingPage;
