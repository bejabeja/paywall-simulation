"use client";

import Loading from "@/app/loading";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function withAuth(Component) {
  return function withAuth(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user && !loading) {
        router.replace("/");
      }
    }, [user, loading, router]);

    if (loading) {
      return <Loading />;
    }

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}


export function withAuthAndSubscription(Component) {
    return function withAuthAndSubscription(props) {
      const { user, loading } = useAuth();
      const router = useRouter();
  
      useEffect(() => {
        if (!user?.isSubscribed && !loading) {
          router.replace("/");
        }
      }, [user, loading, router]);
  
      if (loading) {
        return <Loading />;
      }
  
      if (!user?.isSubscribed) {
        return null;
      }
  
      return <Component {...props} />;
    };
  }
