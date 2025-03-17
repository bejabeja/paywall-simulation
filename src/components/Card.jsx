"use client";
import "./Card.css";

export default function Card({ plan, onClick }) {
  return (
    <div className="plan-card">
      <div className="plan-price-container">
        <h3 className="plan-name">{plan.name}</h3>
        <p className="plan-price">${plan.price}</p>
        <p className="plan-price-text">{plan.priceTextMonthly}</p>
      </div>
      {plan?.features && (
        <ul>
          {plan.features.map((feature, index) => (
            <li key={index}>
              <input type="checkbox" checked disabled />
              {feature.text}
            </li>
          ))}
        </ul>
      )}
      <button className="subscribe-btn" onClick={() => onClick(plan)}>
        {plan.buttonText}
      </button>
    </div>
  );
}
