import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DriverPopup from "./components/DriverPopup";
import CookieConsentBanner from "./components/CookieBanner";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
  title: 'Delivery Driver Jobs Portsmouth | Fleet X Logistics Hampshire',
  description: 'Apply for delivery driver jobs in Portsmouth with Fleet X Logistics. Weekly pay, free vans, flexible rotas and full training across Hampshire. Join a trusted logistics company offering stable routes, supportive onboarding, and long-term earning opportunities for both new and experienced drivers.',
  keywords: 'Amazon delivery driver jobs Havant, delivery driver Hampshire, DSP jobs, self-employed courier',
  alternates: {
    canonical: "https://fleetxlogistics.co.uk/",
  },
 openGraph: {
    title: 'Delivery Driver Jobs in Havant | Fleet X Logistics',
    description:
      'Apply now for delivery driver positions with Fleet X Logistics.',
    
    url: "https://fleetxlogistics.co.uk/",
    
    siteName: "FleetX Logistics",

    type: "website",   

    locale: "en_GB",


  },
    icons: {
  icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1YHMC0TLRC"
          strategy="afterInteractive"
        />
<Script
  id="org-schema"
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://fleetxlogistics.co.uk/#organization",
      name: "FleetX Logistics Ltd",
      url: "https://fleetxlogistics.co.uk/",
      logo: "https://fleetxlogistics.co.uk/logo.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Amazon DPO1, New Lane",
        addressLocality: "Havant",
        addressRegion: "Hampshire",
        addressCountry: "UK",
      },
    }),
  }}
/>

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-55DQ07QSR0"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-55DQ07QSR0');
  `}
</Script>
        
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <DriverPopup />
          <CookieConsentBanner/>
          {children}
      </body>
    </html>
  );
}
