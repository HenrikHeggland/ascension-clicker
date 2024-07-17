"use client";
import React, { useEffect, useState } from "react";
import { useCurrency } from "./CurrencyContext";
import { Skeleton } from "@mui/material";

// Component that gets and displays the current currency
export const CurrencyDisplay = () => {
  const { currency } = useCurrency();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? <p>{currency}</p> : <Skeleton animation="wave" width={25} />}
    </>
  );
};
