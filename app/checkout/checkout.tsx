"use client";

import { Button } from "@mui/material";
import checkout from "./actions/checkout";

interface CheckoutProps {
  productId: number;
}

export default function Checkout({ productId }: CheckoutProps) {
  const handleCheckout = async () => {
    const session = await checkout(productId);

    if (!session?.data?.url) {
      console.error("Invalid session response:", session);
      return;
    }

    window.location.href = session.data.url;
  };
  return (
    <Button
      variant="contained"
      className="max-w-[25%]"
      onClick={handleCheckout}
    >
      Buy Now
    </Button>
  );
}
