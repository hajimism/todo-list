import { Suspense } from "react";

import {
  TodoTableContainer,
  TodoTableLoading,
} from "@/model/todo/components/table";

import { h1 } from "@/styles/typography";

export default function Home() {
  return (
    <main className='flex justify-center p-12 md:mx-0'>
      <div className='container min-h-screen'>
        <h1 className={h1("mb-8")}>Todo List</h1>
        <Suspense fallback={<TodoTableLoading />}>
          <TodoTableContainer />
        </Suspense>
      </div>
    </main>
  );
}
