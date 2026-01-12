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
