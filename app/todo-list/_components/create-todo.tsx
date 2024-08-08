'use client'

import { trpc } from "@/app/_trpc/client"
import { useRouter } from "next/navigation"

export default function CreateTodo () {
  const router = useRouter()

  const addTodo = trpc.createTodo.useMutation({
    onSettled: () => {
      router.refresh()
    }
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const todo = formData.get('todo') as string
    addTodo.mutate(todo)
    form.reset()
  }

  return (
    <section>
      <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input type="text" name="todo" id="todo" className="p-1 text-black bg-none border border-white shadow shadow-gray-200 active:ring active:ring-gray-200 rounded" />
        <button type="submit" className="p-2 text-center bg-amber-400 transition-colors hover:bg-amber-600 rounded-3xl shadow shadow-amber-400 border border-amber-400 active:ring-4 active:ring-amber-400"><span className="font-semibold">Create Todo</span></button>
      </form>
    </section>
  )
}