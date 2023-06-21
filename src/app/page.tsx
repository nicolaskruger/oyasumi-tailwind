"use client";
import { Characters } from "@/components/characters";
import { Header } from "@/components/header";
import { MyHome } from "@/components/home";
import { Text } from "@/components/text";
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
        <MyHome />
        <Characters />
        <Text />
      </div>
    </main>
  );
}
