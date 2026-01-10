import PlusSvg from '../public/icons/plus.svg';
import CheckSvg from '../public/icons/check.svg';
import XSvg from '../public/icons/x.svg';

import Header from "./_components/Header";
import TodoInput from "./_components/TodoInput";
import Button from "./_components/Button";
import TodoItem from "./_components/TodoItem";
import TodoTitle from "./_components/TodoTitle";
import TodoDetail from "./_components/TodoDetail";

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
