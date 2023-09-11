import { TodoListTable } from "@/model/todo/components/table";
import { getTodos } from "@/model/todo/query";

import { h1 } from "@/styles/typography";

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex justify-center p-12 md:mx-0">
      <div className="container min-h-screen">
        <h1 className={h1("mb-8")}>Todo List</h1>
        <TodoListTable todos={todos} />
      </div>
    </main>
  );
}
