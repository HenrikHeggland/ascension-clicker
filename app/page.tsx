"use client";
import { ClickerCard, Footer, Header } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col flex-grow items-center justify-center p-5">
        <div className="flex flex-col mt-3">
          <ClickerCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
