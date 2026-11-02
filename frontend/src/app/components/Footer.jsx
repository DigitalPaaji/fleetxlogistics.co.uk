import Link from "next/link";

// Footer.jsx
export default function Footer() {
  return (
    <footer className="text-gray-90  px-6 md:px-12 lg:px-12 xl:px-32 2xl:px-48">
      <div className="container mx-auto py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-xl font-bold  mb-6 pb-4 border-b border-gray-200/10">
              Fleet X Logistics
            </h3> */}
                    <img 
              src="/logo.webp" 
              alt="Fleet X Logistics" 
              className="h-16 w-auto"
              loading="lazy"
            />
            <p className="text-gray-200 my-6 text-sm">
              Professional Amazon Delivery Service Partner based in Havant, Hampshire.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-200" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-200 text-sm">© 2026 Fleet X Logistics Ltd</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold  mb-6 pb-4 border-b border-gray-200/10">
              Contact
            </h4>
            <div className="space-y-4">
              <a href="mailto:contact@fleetxlogistics.co.uk" className="flex items-center gap-3 text-gray-200 transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@fleetxlogistics.co.uk
              </a>
              <a href="tel:07454954265" className="flex items-center gap-3 text-gray-200  transition-colors">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                07454954265
              </a>
              <div className="flex items-center gap-3 text-gray-200">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Havant, Hampshire
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="border-l border-gray-200/10 lg:col-span-2">
            <div className=" rounded-xl p-6">
              <h3 className="text-xl font-bold  mb-4">
                Ready to Start Delivering?
              </h3>
              <p className="text-gray-200 mb-6">
                We are currently recruiting for our Havant depot. Positions are filled on a rolling basis.
              </p>
              <Link href={'/apply'} className="px-8 py-3 border border-[#f0e5e5] hover:border-[#a7a5a5] cursor-pointer text-white font-semibold transition-colors">
                Start Your Application
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-200 text-sm">
              Fleet X Logistics is a trading name of Fleet X Logistics Ltd, registered in England & Wales.
           {/* <a href="https://digitalpaaji.com" className="hover:text-red-500"> Designed by Digital Paaji.</a> All Rights Reserved. */}
            </p>
            
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-200  text-sm">
                Privacy Policy
              </Link>
              <Link href="/cookie-policy" className="text-gray-200  text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}