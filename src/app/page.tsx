"use client";
import { Header } from "@/components/header";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(true);

  const headerProps = {
    dark,
    setDark,
  };

  return (
    <main className={`${(dark && "dark") || ""} `}>
      <div className=" min-h-screen bg-slate-50 dark:bg-slate-950">
        <Header {...headerProps} />
      </div>
    </main>
  );
}
