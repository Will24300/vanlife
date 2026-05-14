import React from "react";
import { useState } from "react";
import { Link, useLoaderData, useSearchParams } from "react-router-dom";

export function loginLoader({ request }) {
  return new URL(request.url).searchParams.get("message");
}
function Login() {
  const msg = useLoaderData();
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginFormData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setLoginFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl mb-8">Sign in to your account</h1>
      {msg && <p className="mb-5 text-red-500">{msg}</p>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-3/4"
      >
        <input
          type="email"
          placeholder="Email address"
          className="bg-white w-full py-1 px-3 border border-gray-400 rounded outline-none"
          name="email"
          value={loginFormData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-white w-full py-1 px-3 border border-gray-400 rounded outline-none"
          name="password"
          value={loginFormData.password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="my-5 bg-[#FF8C38] text-white w-full py-1.5 font-semibold rounded cursor-pointer"
        >
          Sign in
        </button>
      </form>
      <p>
        Don’t have an account?{" "}
        <Link to="login" className="text-[#FF8C38]">
          Create one now
        </Link>
      </p>
    </section>
  );
}

export default Login;
