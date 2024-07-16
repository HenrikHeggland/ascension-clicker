import { Counter } from "./counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <div>
        <h1>ASCENSION CLICKER</h1>
      </div>
      <div className="flex flex-col flex-grow-1">
        <Counter />
      </div>

      <div className="flex flex-row items-center gap-4">
        <a href="https://github.com/HenrikHeggland/ascension-clicker">
          <Image
            src="/github-mark-white.svg"
            alt="GitHub Logo"
            className="dark"
            width={32}
            height={24}
            priority
          />
        </a>
        <p>Heggland Dev</p>
      </div>
    </main>
  );
}
