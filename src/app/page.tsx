import Link from "next/link";
import { prisma } from "./db";
import { TodoItem } from "@/components/TodoItem";
import { MyHeader } from "@/components/MyHeader";

async function toggleTodo(id: string, complete: boolean) {
  "use server"

  await prisma.todo.update({
    where: {
      id: id
    },
    data: {
      complete: complete
    }
  })
}

export default async function Home() {

  const todos = await prisma.todo.findMany()
  return <>
    <MyHeader headerText="Home"></MyHeader>

    <Link
      className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
      href="/new">
      New
    </Link>

    <ul className="pl-4">
      {todos.map((todo) => (
        <li key={todo.id} className="flex justify-between items-center mb-2">
          <TodoItem id={todo.id} title={todo.title} complete={todo.complete} key={todo.id} toggleTodo={toggleTodo} />
        </li>
      ))}
    </ul>
  </>
}