"use client";

export default function InnerBanner() {
  const scrollToWhy = () => {
    const el = document.getElementById("why-fleet");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className=" relative h-[600px] lg:h-[700px] flex items-center  justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/banner0.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br lg:bg-linear-to-r from-black/40 via-black/70  to-black/80 lg:to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl lg:max-w-4xl text-center  px-6 py-24">
        <h1 className=" text-4xl xl:text-6xl font-bold leading-tight">
          Delivery Driver Jobs in Havant & Hampshire

        </h1>

        <p className="mt-4  text-md lg:text-lg">
        Start your journey with Fleet X Logistics. Immediate starts available for reliable, self-employed delivery drivers working with an Amazon Delivery Service Partner.
        </p>

  
      </div>
    </section>
  );
}
