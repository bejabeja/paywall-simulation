"use client";

import Card from "@/components/Card";
import { useAuth } from "@/hooks/useAuth";
import { useData } from "@/hooks/useData";
import { getPlans } from "@/services/plansService";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [plans, setPlans] = useState([]);
  const { isAuthenticated } = useAuth();
  const { setSelectedPlan } = useData();
  const router = useRouter();

  const handleButton = (plan) => {
    if (!isAuthenticated) {
      router.push("/sign-in");
    } else {
      setSelectedPlan(plan);
      router.push("/check-out");
    }
  };

  useEffect(() => {
    const fetchPlans = async () => {
      const data = await getPlans();
      setPlans(data);
    };

    fetchPlans();
  }, []);

  return (
    <section className="container">
      <h2 className="mainTitle">Choose Your Plan</h2>
      <h4 className="subTitle">
        Tailored to fit every step of your journey. Start your adventure today!
      </h4>
      <div className={styles["plans-grid"]}>
        {plans.map((plan) => (
          <Card key={plan.id} plan={plan} onClick={handleButton} />
        ))}
      </div>
    </section>
  );
}
