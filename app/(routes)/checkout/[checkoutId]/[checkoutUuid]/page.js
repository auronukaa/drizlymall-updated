"use client";

import { useCheckout } from "@/hooks/use-checkout";
import CheckoutCard from "./components/checkout-card";
import { useEffect, useState } from "react";
import FormContent from "./components/form-content";
import Currency from "./components/currency";
import { X } from "lucide-react";

export const revalidate = 0;

const ItemCheckout = () => {
  const checkout = useCheckout((state) => state.checkout);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white my-16 sm:px-0">
      <div className="px-4 sm:px-6 mx-auto max-w-7xl">
        <h1 className="my-8 font-bold text-xl sm:text-3xl text-center">
          Produktet për porosinë
        </h1>
        <div className="w-full border border-gray-200 rounded-md">
          {checkout.map((item) => (
            <CheckoutCard key={item.id} data={item} />
          ))}

          {checkout.length === 0 && (
            <div className="flex flex-col items-center justify-center m-10 p-10 gap-y-10">
              <X size={100} className="text-gray-300" />
              <h1 className="text-gray-300 text-3xl">
                Nuk keni asnjë produkt në shportë
              </h1>
            </div>
          )}
        </div>

        <FormContent />
      </div>
    </div>
  );
};

export default ItemCheckout;
