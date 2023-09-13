import { Suspense } from "react";

import { TodoTableContainer } from "@/model/todo/components/table/container";

import { h1 } from "@/styles/typography";

export default async function Home() {
  return (
    <main className='flex justify-center p-12 md:mx-0'>
      <div className='container min-h-screen'>
        <h1 className={h1("mb-8")}>Todo List</h1>
        <Suspense>
          <TodoTableContainer />
        </Suspense>
      </div>
    </main>
  );
}
