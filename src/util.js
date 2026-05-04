import { redirect } from "react-router";

export async function requireAuth() {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    redirect("/login");
  }
}
