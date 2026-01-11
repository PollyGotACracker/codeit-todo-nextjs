import { SERVER_URL } from "@/constants/api";

export default async function fetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${SERVER_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(errorData.message || DEFAULT_ERROR_MSG);
  }

  return res.json();
}

const DEFAULT_ERROR_MSG = "An error occurred while fetching data.";
