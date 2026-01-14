import { ERROR_MSG } from "@/constants/errors";
import { findFormField, validateText } from "@/libs/handlers";

export function validateImageFile(file: File) {
  let flag = true;

  // 파일명 영문자만 허용
  const dotIndex = file.name.lastIndexOf("."); // 확장자 제외
  const filename = file.name.slice(0, dotIndex);
  if (!/^[a-zA-Z]*$/.test(filename)) {
    flag = false;
  }
  // image 파일만 허용
  if (!file.type.startsWith("image/")) {
    flag = false;
  }
  // 5MB 이하
  if (file.size > 5 * 1024 * 1024) {
    flag = false;
  }

  if (!flag) {
    throw new Error(ERROR_MSG.INVALID_ATTACH_IMG);
  }
}

export function checkUpdateFormChanged(
  e: React.FormEvent<HTMLFormElement>
): boolean {
  const form = e.currentTarget;
  let hasChanged = false;

  // checkbox checked 값이 false 일 경우 FormData 에 포함되지 않음
  const elements = Array.from(form.elements) as (
    | HTMLInputElement
    | HTMLTextAreaElement
  )[];
  for (const element of elements) {
    if (!element.name) continue;
    let flag = false;

    if (element instanceof HTMLInputElement && element.type === "checkbox") {
      // input checkbox
      flag = element.checked !== element.defaultChecked;
    } else {
      // input text | textarea
      flag = element.value !== element.defaultValue;
    }
    if (flag) {
      hasChanged = true;
      break;
    }
  }
  // name 필드가 빈 텍스트인지 확인
  const nameInput = findFormField(form, "name") as HTMLButtonElement;
  if (!validateText(nameInput.value)) {
    return false;
  }

  return hasChanged;
}
