"use client";
import { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import styles from './styles.module.css';
import { useRouter } from 'next/navigation';
import "@fontsource/inter";

interface LoginData {
  email: string;
  password: string;
}

const Login = () => {
  const [data, setData] = useState<LoginData>({ email: '', password: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const url = 'http://localhost:8080/api/auth';
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        setError(errorData.message);
        return;
      }

      const result = await res.json();
      localStorage.setItem('token', result.data);
      console.log(result.data);
      router.push('/');
    } catch (error) {
      console.error('An unexpected error occurred:', error);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className={styles.login_container} style={{ fontFamily: "Inter" }}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
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
            <button type="submit" className={styles.green_btn}>
              Sign In
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h1>New Here ?</h1>
            <a href="/signup">
              <button type="button" className={styles.white_btn}>
                Sign Up
              </button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
