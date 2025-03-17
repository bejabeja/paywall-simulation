"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Loading from "../loading";
import styles from "./page.module.css";

const fakeTravelNews = [
  {
    title: "New Floating Island Opens in the Caribbean!",
    content:
      "Scientists have created a floating island that will be the new most exclusive tourist destination. A one-way ticket costs $10,000!",
  },
  {
    title: "Travelers Can Now Fly to the Moon for Less Than $1,000",
    content:
      "A new airline is offering space flights to the Moon at an incredibly low price. Don't miss out on your seat!",
  },
  {
    title: "New High-Speed Train Connects Paris to New York in 30 Minutes",
    content:
      "Thanks to advanced technology, a super-fast train now connects Paris to New York in record time. Say goodbye to long flights!",
  },
  {
    title: "Tourists Can Now Pay Everywhere with 'Travel Coin' Cryptocurrency",
    content:
      "A new cryptocurrency exclusively for travel has been launched. Tourists can pay anywhere without the need for currency exchange.",
  },
  {
    title:
      "An Airplane Turns Your Flight into a Luxury Experience with Spas and Massages",
    content:
      "The most exclusive airline has launched a luxury flight service where passengers will enjoy massages and a five-star spa on board.",
  },
];
export default function News() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading />;
  }

  if (!user && !user?.isSubscribed) {
    return null;
  }

  return (
    <section className="container">
      <h2 className="mainTitle">Fake Travel News</h2>
      <h4 className="subTitle">News generated with Chatgpt</h4>

      <div className={styles.grid}>
        {fakeTravelNews.map((news, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{news.title}</h3>
            <p className={styles.cardP}>{news.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
