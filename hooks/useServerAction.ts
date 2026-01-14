// "use client";

// import { useState, useTransition } from "react";
// import { useRouter } from "next/navigation";

// // action 의 data 인자는 선택적(Event, FormData, 기타...)
// type UseServerActionReturn = [
//   action: (data?: unknown) => Promise<void>,
//   isPending: boolean,
//   isSuccess: boolean,
//   error: string | null
// ];

// export default function useServerAction(
//   actionFn: Function,
//   redirect?: string
// ): UseServerActionReturn {
//   const [isPending, startTransition] = useTransition();
//   const [isSuccess, setIsSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const action = async (data?: unknown) => {
//     startTransition(async () => {
//       try {
//         setError(null);
//         setIsSuccess(false);

//         await actionFn(data);

//         setIsSuccess(true);
//         if (redirect) router.push(redirect);
//       } catch (e: any) {
//         setIsSuccess(false);
//         setError(e.message || "Unknown Error");
//       }
//     });
//   };

//   return [action, isPending, isSuccess, error];
// }
