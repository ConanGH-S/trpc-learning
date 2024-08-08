import ShowTodosList from "./_components/show-todos-list";
import CreateTodo from "./_components/create-todo";
import { caller } from "../_trpc/serverClient";

async function getData() {
  return await caller.getTodos()
}

export default async function Page () {
  const data = await getData()

  return (
    <main className="container mx-auto flex flex-col gap-3 items-center">
      <section>
        <h1 className="text-3xl uppercase font-bold flex flex-col">Todos</h1>
        <ShowTodosList todos={data} />
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl uppercase text-center font-semibold">New todo</h2>
        <CreateTodo />
      </section>
    </main>
  )
}