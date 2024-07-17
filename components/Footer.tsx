import React from "react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center p-4">
      <a
        className="flex flex-row items-center gap-4"
        title="GitHub Repository"
        href="https://github.com/HenrikHeggland/ascension-clicker"
      >
        <Image
          src="/github-mark.svg"
          alt="GitHub Logo"
          width={24}
          height={24}
          priority
        />
        <i className="text-gray-700">Heggland Dev</i>
      </a>
    </footer>
  );
};
