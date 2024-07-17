import React from "react";

export const Header = () => {
  return (
    <header className="w-full border-b text-white py-4">
      <div className="max-w-1xl mx-auto flex justify-between items-center px-8">
        <h2>ASCENSION CLICKER</h2>
        {/* Add more widgets here */}
        <div className="flex flex-row gap-5">
          <p>CURRENCY: 0</p>
          <p>MENU</p>
        </div>
      </div>
    </header>
  );
};
