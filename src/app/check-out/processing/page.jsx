"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import "../Checkout.css";

export default function ProcessingPayment() {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const searchParams = useSearchParams();
  const status = searchParams?.get("status");

  useEffect(() => {
    const timer = setTimeout(() => {
      setPaymentComplete(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div className="processing-content">
        {paymentComplete && status === "success" && (
          <>
            <h2>Payment Completed ✅</h2>
            <p>Thank you for your purchase!</p>
            <Link href="/profile" className="link">
              Go to Profile
            </Link>
          </>
        )}

        {paymentComplete && status === "failed" && (
          <>
            <h2>Payment Failed ❌</h2>
            <p>Please try again!</p>
            <Link href="/" className="link">
              Go to Subscription
            </Link>
          </>
        )}

        {!paymentComplete && (
          <>
            <h2>Processing Payment...</h2>
            <p>Please wait while we connect to your bank.</p>
            <div className="loading"></div>
          </>
        )}
      </div>
    </div>
  );
}
