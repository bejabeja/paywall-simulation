"use client";

import { withAuth } from "@/components/withAuth";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import "./Profile.css";

function Profile() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleUpgrade = () => {
    router.push("/");
  };

  return (
    <section className="container">
      <div className="profile-card">
        <div>
          <h2>Welcome, {user.name} 👋</h2>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Last name: {user.lastName}</p>
          <p>
            Member since:{" "}
            {new Date(user.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>

        <div className="plan-details">
          <h3>Your Plan: </h3>
          {user.isSubscribed && user.selectedPlan ? (
            <>
              <h3>{user.selectedPlan.name}</h3>
              <p>Price: ${user.selectedPlan.price} / month</p>
            </>
          ) : (
            <p>No subscription plan selected.</p>
          )}
        </div>

        <div>
          <button className="primary-button" onClick={handleUpgrade}>
            Upgrade Plan
          </button>
          <p></p>
          <button className="secondary-button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </section>
  );
}

export default withAuth(Profile);