import React, { useEffect, useState } from "react";
import { useCurrency } from "./CurrencyContext";
import { Card, Skeleton } from "@mui/material";

export const ClickerCard = () => {
  const { addCurrency } = useCurrency();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Card
        variant="outlined"
        onClick={addCurrency}
        style={{
          border: "1px solid white",
          backgroundColor: "transparent",
          padding: "20px",
          color: "white",
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {isClient ? (
          <h2>Click Me!</h2>
        ) : (
          <Skeleton variant="rounded" animation="wave" width={70} height={24} />
        )}
      </Card>
    </>
  );
};
