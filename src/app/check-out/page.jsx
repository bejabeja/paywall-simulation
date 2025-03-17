"use client";

import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { useData } from "@/hooks/useData";
import { processCheckout } from "@/services/processCheckout";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import Loading from "../loading";

import "./Checkout.css";

export default function Checkout() {
  const { selectedPlan } = useData();
  const { user, login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const checkoutData = {
      userId: user.id,
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      address: formData.get("address"),
      country: formData.get("country"),
      cardDetails: {
        number: formData.get("card-details-name"),
        expirationDate: formData.get("card-details-date"),
        cvv: formData.get("card-details-cvv"),
      },
      selectedPlan: selectedPlan,
    };
    try {
      const response = await processCheckout(checkoutData);
      router.push(`/check-out/processing?status=success`);
      login(response.user);
    } catch (error) {
      // toast.error(error.message);
      router.push(`/check-out/processing?status=failed`);
    }
  };

  if (!selectedPlan) {
    return <Loading>Loading your plan...</Loading>;
  }

  return (
    <section className="container">
      <div className="checkout-container">
        <form onSubmit={handleSubmit} className="checkout-form checkout-column">
          <h2>Checkout</h2>

          <Input
            label="Full Name"
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            aria-label="Full Name"
          />

          <Input
            label="Email"
            type="email"
            name="email"
            required
            placeholder="Enter your email"
            aria-label="Email"
          />

          <Input
            label="Phone"
            type="text"
            name="phone"
            required
            placeholder="Enter your phone"
            aria-label="Phone Number"
          />

          <Input
            label="Adress"
            type="text"
            name="address"
            required
            placeholder="Enter address"
            aria-label="Address"
          />

          <Input
            label="Country"
            type="text"
            name="country"
            required
            placeholder="Enter country"
            aria-label="Country"
          />

          <Input
            label="Credit Card Details"
            type="text"
            name="card-details-name"
            required
            placeholder="Enter credit card number"
            aria-label="Credit Card Number"
          />
          <Input
            type="text"
            name="card-details-date"
            required
            placeholder="Expiration Date"
            aria-label="Expiration Date"
          />
          <Input
            type="text"
            name="card-details-cvv"
            required
            placeholder="CVV"
            aria-label="CVV"
          />

          <button type="submit" className="primary-button">
            Proceed to Payment
          </button>
        </form>

        <div className="checkout-column summary">
          <h2>Summary</h2>
          <p className="summary--plan-title">Plan {selectedPlan.name}</p>
          <p className="summary--plan-title">Features:</p>
          <ul>
            {selectedPlan.features.map((feature, index) => (
              <li key={index}>{feature.text}</li>
            ))}
          </ul>

          <p className="summary--plan-title">
            Total price: ${selectedPlan.price}
          </p>
        </div>
      </div>
    </section>
  );
}
