"use client";

import {
  ReactNode,
  createContext,
  useState,
  useEffect,
  useContext,
} from "react";

interface CurrencyContextType {
  currency: number;
  addCurrency: () => void;
  subtractCurrency: () => void;
  resetCurrency: () => void;
}

export const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined
);

// Custom hook to use the currency context
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
};

// Provider component that wraps your app and makes the currency context available to any child component that calls useCurrency
export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrency] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);

  // Set isClient to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set isClient to true after the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Load currency from localStorage
  useEffect(() => {
    if (isClient) {
      const storedCurrency = localStorage.getItem("currency");
      console.log("Stored Currency on Load:", storedCurrency); // Debugging
      if (storedCurrency !== null) {
        setCurrency(Number(storedCurrency));
      }
    }
  }, [isClient]);

  // Update localStorage whenever currency changes
  useEffect(() => {
    if (isClient) {
      console.log("Updating localStorage with currency:", currency); // Debugging
      localStorage.setItem("currency", String(currency));
    }
  }, [currency, isClient]);

  // Function to add currency
  const addCurrency = () => {
    setCurrency((prevCurrency) => prevCurrency + 1);
  };

  // Function to subtract currency
  const subtractCurrency = () => {
    setCurrency((prevCurrency) => (prevCurrency > 0 ? prevCurrency - 1 : 0));
  };

  // Function to reset currency
  const resetCurrency = () => {
    setCurrency(0);
    if (isClient) {
      localStorage.setItem("currency", "0");
    }
  };

  return (
    <CurrencyContext.Provider
      value={{ currency, addCurrency, subtractCurrency, resetCurrency }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
