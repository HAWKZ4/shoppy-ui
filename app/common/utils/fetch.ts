import { cookies } from "next/headers";
import { API_URL } from "../constants/api";
import { getErrorMessage } from "./errors";

export const getHeaders = async () => {
  const cookieStore = (await cookies()).toString();

  return {
    Cookie: cookieStore,
  };
};

export const post = async (path: string, formData: FormData) => {
  const res = await fetch(`${API_URL}/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...(await getHeaders()) },
    body: JSON.stringify(Object.fromEntries(formData)),
  });

  const parsedRes = await res.json();
  if (!res.ok) {
    return { error: getErrorMessage(parsedRes) };
  }
  return { error: "", data: parsedRes };
};

export const get = async <T>(path: string, tags?: string[]) => {
  const res = await fetch(`${API_URL}/${path}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", ...(await getHeaders()) },
    next: {
      tags,
    },
  });
  return res.json() as T;
};
