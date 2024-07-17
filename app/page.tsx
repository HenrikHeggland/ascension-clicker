import { Footer, Header, Counter } from "@/components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex flex-col flex-grow items-center justify-center p-5">
        <div>
          <h1>Text</h1>
        </div>
        <div className="flex flex-col">
          <Counter />
        </div>
      </main>

      <Footer />
    </div>
  );
}
