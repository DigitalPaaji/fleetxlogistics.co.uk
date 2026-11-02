"use client";

import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  };

  const closeBanner = () => {
    localStorage.setItem("cookie-consent", "essential");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 bg-black border-t border-white/20">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between">
          
          {/* Left content */}
          <div className="flex gap-3">
            <div className="flex-shrink-0 p-2 rounded-md bg-white/10">
              <Cookie className="w-5 h-5 text-white" />
            </div>

            <div className="text-sm text-white/90">
              <p className="mb-1">
                We use cookies to enhance your browsing experience, analyze site traffic,
                and support marketing activities.
                <Link
                  href="/cookie-policy"
                  className="ml-1 text-[#ff0000] hover:underline"
                >
                  Learn more
                </Link>
              </p>

              <p className="text-xs text-white/60">
                You can manage your preferences at any time.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm border border-white/30 text-white hover:bg-white/10 transition rounded-md"
            >
              Essential Only
            </button>

            <button
              onClick={acceptAll}
              className="px-4 py-2 text-sm bg-[#ff0000] hover:bg-[#d12020] text-white font-semibold transition rounded-md"
            >
              Accept All
            </button>

            <button
              onClick={closeBanner}
              aria-label="Close cookie banner"
              className="p-2 text-white/50 hover:text-white transition"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
