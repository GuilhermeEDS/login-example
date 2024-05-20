import { redirect } from "react-router-dom";
import axiosClient from "./axiosClient";

export async function LoginApi(email: string, password: string) {
  try {
    await axiosClient
      .post("auth/login/", {
        email: email,
        password: password,
      })
      .then(async (response: { data: { tokens: { access: string } } }) => {
        localStorage.setItem("token", response.data.tokens.access);
      });
    redirect("/");
  } catch (error) {
    alert("Error: " + error);
  }
}

export async function getProfile() {
  return await axiosClient.get("auth/profile/", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
}
