import React from "react";

import HomePage from "@/app/home";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Beacon of Hope",
};



export default function Home() {
  return (
    <main>
      <HomePage />

    </main>
  );
}
