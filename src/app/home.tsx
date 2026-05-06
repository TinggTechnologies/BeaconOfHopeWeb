import React from "react";
import Link from "next/link";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Cook from "@/components/Home/Cook";
import Expert from "@/components/Home/Expert";
import Newsletter from "@/components/Home/Newsletter";

function RegisterSection() {
  return (
    <section className="bg-primary/5 dark:bg-gray-800 py-20">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white mb-4">
          Get Started Today
        </h2>
        <p className="text-black/50 dark:text-white/50 md:text-lg mb-10 max-w-xl mx-auto">
          Create a free account and join thousands of members already benefiting from the Beacon of Hope cooperative platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://www.beaconofhopecooperative.com.ng/auth/register"
            className="text-xl font-medium rounded-full text-white py-5 px-10 bg-primary border border-primary hover:bg-transparent hover:text-primary"
          >
            Create an Account
          </Link>
          <Link
            href="https://www.beaconofhopecooperative.com.ng/auth/login"
            className="text-xl font-medium rounded-full text-primary py-5 px-10 border border-primary hover:bg-primary hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cook />
      <RegisterSection />
      <Expert />
      <Newsletter />
    </main>
  );
}