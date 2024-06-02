"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import { useRouter } from "next/navigation";
import "@fontsource/inter";
import { useSignUp } from "@/hooks/auth/useSignUp";

interface SignupData {
  name: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [data, setData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();
  const { error, loading, signUp } = useSignUp();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(data.name, data.email, data.password);
  };

  return (
    <div className={styles.signup_container} style={{ fontFamily: "Inter" }}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <a href="/login">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </a>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={data.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={styles.input}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn} disabled={loading}>
              {loading ? "Loading" : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
