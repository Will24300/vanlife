import { Navigate, redirect, useNavigate } from "react-router-dom";

export async function requireAuth() {
  // const navigate = useNavigate();
  const isLoggedIn = false;
  if (!isLoggedIn) {
    throw redirect("/login");
  }
}
