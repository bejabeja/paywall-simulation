"use client";

import Input from "@/components/Input";
import { signUpUser } from "@/services/authService";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Signup() {
  const router = useRouter();

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("name"),
      lastName: formData.get("lastName"),
    };

    try {
      await signUpUser(data);
      toast.success("User created successfully");
      router.push("/sign-in");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section className="container">
      <form onSubmit={handleOnSubmit} className="form-container">
        <h2>Sign up</h2>

        <Input
          label="Email"
          type="email"
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

        <Input
          label="First Name"
          type="text"
          name="name"
          placeholder="First Name"
          required
        />

        <Input
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
        />

        <button type="submit" className="primary-button">
          Create User
        </button>
      </form>
      <Link href="/sign-in" className="link">
        Already have an account?
      </Link>
    </section>
  );
}
