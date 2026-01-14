# 코드잇 단기심화 스프린트 - 과제테스트

- 전유영
- bitterns96@gmail.com
- 2026.01.10 ~ 2026.01.14
- NextJS 프로젝트 / Vercel 배포 및 도메인 적용

<details>
<summary>📑 목차</summary>

- [🔗 배포 주소](#배포-주소)
- [🖥️ 실행 화면](#실행-화면)
- [🚀 실행 방법](#실행-방법)
- [⚡ 구현 사항](#구현-사항)
- [📌 향후 계획](#향후-계획)
- [💡 이슈 목록](#이슈-목록)

</details>

## 배포 주소

- [https://mytodolist.kr/](https://mytodolist.kr/)

## 실행 화면

![index](/docs/index.png)
![items](/docs/items.png)

## 실행 방법

1. 로컬에 프로젝트 가져오기

```bash
git clone https://github.com/PollyGotACracker/codeit-todo-nextjs.git
```

2. .env 파일 추가

```
SERVER_URL=서버 주소
IMAGE_HOST_NAME=프로토콜을 제외한 이미지 호스트 주소
```

3. 패키지 다운로드 및 개발 환경에서 프로젝트 실행

```bash
# 최상위 폴더에서 실행
npm install
npm run dev
```

## 구현 사항

- 반응형 화면 구현
- Header 로고 클릭 시 인덱스 페이지 이동(인덱스 페이지일 경우 새로고침)
- ✨\[추가 구현\]: 버튼 조건부 활성화
  - 항목 추가: 할 일 이름 유효성 검사
  - 상세 변경: 데이터 변경 여부 및 할 일 이름 유효성 검사

### 할 일 목록 페이지("/")

- 진행 중, 완료 항목 그룹핑
- 추가하기 버튼 클릭 또는 input 엔터 시 항목 추가
- 항목 좌측의 버튼 토글을 클릭하여 완료 여부 변경 및 목록 이동

### 할 일 상세 페이지("/items/{itemId}")

- 할 일 수정: 이름, 완료 여부, 이미지 첨부, 메모
- 이미지 첨부 유효성 검사: 파일명 영어, 파일 크기 5MB 이하, 이미지 파일 여부
- 수정 또는 삭제 완료 시 할 일 목록 페이지로 이동

## 향후 계획

- Tailwind 디자인 토큰 관리 / `@media`, `@keyframes` 등 쿼리 적용법 확인
- NextJS server action 문서 추가 탐색
- Fallback 처리
- Infinite Scroll
- [Optimistic Updates](https://ko.react.dev/reference/react/useOptimistic)

## 이슈 목록

### form action 에러

- [이슈 링크1](https://github.com/vercel/next.js/discussions/56234)
- [이슈 링크2](https://github.com/vercel/next.js/discussions/82655)

  > javascript:throw new Error('A React form was unexpectedly submitted.
  > If you called form.submit() manually, consider using form.requestSubmit() instead.
  > If you're trying to use event.stopPropagation() in a submit event handler,
  > consider also calling event.preventDefault().')

- HTML에서 표시됨. 사라졌다가 페이지 복귀 시 다시 나타나는 경우도 있음.

1.  state 변수 제거?: X
2.  form 을 포함한 내부 요소의 eventHandler 제거?: X
3.  submit 버튼 disabled 변경 금지?: X
4.  e.preventDefault() 사용?: X
