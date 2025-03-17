"use client";

import Input from "@/components/Input";
import { useAuth } from "@/hooks/useAuth";
import { signInUser } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Signin() {
  const { login } = useAuth();
  const router = useRouter();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    try {
      const userData = await signInUser(data);
      toast.success("User signed in successfully");
      login(userData);
      router.push("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="container">
      <form onSubmit={handleOnSubmit} className="form-container">
        <h2>Sign in</h2>

        <Input
          label="Email"
          type="text"
          name="email"
          placeholder="Email"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="primary-button">
          Sign in
        </button>
      </form>
      <Link href="/sign-up" className="link">
        New? Sign up now!
      </Link>
    </section>
  );
}
