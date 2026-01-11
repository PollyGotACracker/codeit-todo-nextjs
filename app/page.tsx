import PlusSvg from '@/icons/plus.svg';
import CheckSvg from '@/icons/check.svg';
import XSvg from '@/icons/x.svg';

import Header from "@/components/Header";
import TodoInput from "@/components/TodoInput";
import Button from "@/components/Button";
import TodoItem from "@/components/TodoItem";
import TodoTitle from "@/components/TodoTitle";
import TodoDetail from "@/components/TodoDetail";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full flex flex-col">

        <TodoInput placeholder="할 일을 입력해주세요" />
        <Button Icon={PlusSvg} text="추가하기" id="insert" name="insert" />
        <TodoItem content="nextjs 공부하기" isDone={false} />
        <TodoItem content="nextjs 공부하기" isDone={true} />
        <TodoTitle content="nextjs 공부하기" isDone={false} />
        <TodoTitle content="nextjs 공부하기" isDone={true} />
        <TodoDetail />
        <Button Icon={CheckSvg} text="수정 완료" id="update" name="update" bgColor="var(--slate-200)" />
        <Button Icon={CheckSvg} text="수정 완료" id="update_2" name="update_2" bgColor="var(--lime-300)" />
        <Button Icon={XSvg} text="삭제하기" id="delete" name="delete" bgColor="var(--rose-500)" textColor="#fff" />
      </main>
    </>
  );
}
