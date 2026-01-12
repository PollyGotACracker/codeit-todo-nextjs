import { SERVER_URL } from "@/constants/api";

export default async function fetcher<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${SERVER_URL}${endpoint}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      /* formData header 수동 설정 시 경계값(boundary) 생성 이슈 발생 */
      ...(!(options?.body instanceof FormData) && {
        "Content-Type": "application/json",
      }),
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
