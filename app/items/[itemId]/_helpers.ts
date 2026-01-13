export function validateImageFile(file: File) {
  let flag = true;

  // 1. 파일명 영문자만 허용
  const dotIndex = file.name.lastIndexOf("."); // 확장자 제외
  const filename = file.name.slice(0, dotIndex);
  if (!/^[a-zA-Z]*$/.test(filename)) {
    flag = false;
  }
  // 2. image 파일
  if (!file.type.startsWith("image/")) {
    flag = false;
  }
  // 3. 5MB 이하
  if (file.size > 5 * 1024 * 1024) {
    flag = false;
  }

  if (!flag) {
    throw new Error("Invalid file");
  }
}

export function checkUpdateFormChanged(
  e: React.FormEvent<HTMLFormElement>
): boolean {
  const form = e.currentTarget;
  let hasChanged = false;

  // checkbox checked 값이 false일 경우 FormData에 포함되지 않음
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
  return hasChanged;
}
