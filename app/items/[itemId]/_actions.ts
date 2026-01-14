"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import fetcher from "@/libs/fetcher";
import { ActionState, ImageUploadRes, ItemDetail } from "@/types";
import { ROUTE } from "@/constants/route";
import { ERROR_MSG } from "@/constants/errors";

type UpdateItemPayload = {
  itemId: number;
  formData: FormData;
};
export async function updateItem(
  _: ActionState,
  payload: UpdateItemPayload
): Promise<ActionState> {
  let isSuccess = false;

  try {
    const { itemId, formData } = payload;
    if (!itemId) return { error: ERROR_MSG.INVALID_PARAM("itemId") };
    if (!formData) return { error: ERROR_MSG.INVALID_PARAM("formData") };

    const isCompleted = !!formData.get("isCompleted"); // "true" | null => true | false
    const name = formData.get("name");
    const memo = formData.get("memo");
    const imageUrl = formData.get("imageUrl");

    const endpoint = `/items/${itemId}`;
    await fetcher<ItemDetail>(endpoint, {
      method: "PATCH",
      body: JSON.stringify({ name, memo, imageUrl, isCompleted }),
    });
    revalidatePath(ROUTE.HOME);
    revalidatePath(`${ROUTE.ITEMS}/${itemId}`);

    isSuccess = true;
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    } else {
      return { error: ERROR_MSG.SERVER_ERROR };
    }
  }
  // 또는 컴포넌트 내에서 리디렉션
  if (isSuccess) {
    redirect(ROUTE.HOME);
  } else {
    return null;
  }
}

export async function uploadImage(formData: FormData): Promise<ImageUploadRes> {
  const endpoint = `/images/upload`;
  const res = await fetcher<ImageUploadRes>(endpoint, {
    method: "POST",
    body: formData,
  });

  return res;
}

type DeleteItemPayload = {
  itemId: number;
};
export async function deleteItem(
  _: ActionState,
  payload: DeleteItemPayload
): Promise<ActionState> {
  let isSuccess = false;

  try {
    const { itemId } = payload;
    if (!itemId) return { error: ERROR_MSG.INVALID_PARAM("itemId") };

    const endpoint = `/items/${itemId}`;
    await fetcher<ItemDetail>(endpoint, {
      method: "DELETE",
    });
    revalidatePath(ROUTE.HOME);
    revalidatePath(`${ROUTE.ITEMS}/${itemId}`);

    isSuccess = true;
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    } else {
      return { error: ERROR_MSG.SERVER_ERROR };
    }
  }
  // redirect 가 try 문 안에 있으면 /items/{itemId} GET 서버 에러 응답
  if (isSuccess) {
    redirect(ROUTE.HOME);
  } else {
    return null;
  }
}
