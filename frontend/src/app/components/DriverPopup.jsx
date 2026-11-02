"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaArrowRight, FaBolt, FaMoneyBillWave } from "react-icons/fa";
import Image from "next/image";

export default function DriverPopup() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 px-4">
      <div
        ref={popupRef}
        className="relative w-full max-w-xl overflow-hidden  border border-white/10 bg-[#da3526] text-white shadow-2xl animate-fadeIn scale-[0.98]"
      >
        {/* Background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/amazonvan.png"
            alt="Amazon delivery van"
            fill
            className="object-cover opacity-10"
          />
        </div>

        {/* Close icon */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition"
          aria-label="Close"
        >
          <IoClose size={26} />
        </button>

        <div className="p-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className=" bg-white/10 p-2">
              <Image
                src="/amazonvan.png"
                alt="Amazon van"
                width={36}
                height={36}
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold leading-snug">
              Delivery Drivers Needed
              <span className="block text-sm font-medium text-white/70">
                Immediate Starts Available
              </span>
            </h2>
          </div>

          {/* Pay */}
          <div className="space-y-1">
            <p className="text-2xl font-bold flex items-center gap-2">
              <FaMoneyBillWave className="text-green-400" />
              £128.70 / day
            </p>
            <p className="text-white/70 text-sm">
              (£154.44 inc. VAT if registered)
            </p>
          </div>

          {/* Incentives */}
          <p className="mt-3 flex items-center gap-2 text-sm">
            <FaBolt className="text-yellow-400" />
            £5–£10 daily performance incentives
          </p>

          {/* Benefits */}
          <ul className="mt-4 space-y-2 text-sm text-white/90">
            <li className="flex items-center gap-2">✔ Electric delivery vans provided FREE</li>
            <li className="flex items-center gap-2">✔ Weekly pay</li>
          </ul>

          {/* CTA */}
          <a
            href="/apply"
            className="group mt-6 flex items-center justify-center gap-2 w-full rounded-xl bg-white text-black py-3 font-semibold transition hover:bg-gray-200"
          >
            Apply Now - Takes 60 Seconds
            <FaArrowRight className="transition group-hover:translate-x-1" />
          </a>

          {/* Privacy */}
          <p className="mt-4 text-center text-xs text-white/60">
            By applying, you agree to our{" "}
            <a
              href="/privacy-policy"
              className="underline hover:text-white"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
