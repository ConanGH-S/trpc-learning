'use client'

import { caller } from "@/app/_trpc/serverClient"

interface ShowTodosListProps {
  todos: Awaited<ReturnType<(typeof caller)['getTodos']>>
}

export default function ShowTodosList ({todos}: ShowTodosListProps) {
  return (
    <section>
      <span>
        {todos.map((todo) => {
            return (
              <li key={todo.id}>{todo.content} - {todo.completed ? 'completed' : 'not completed'}</li>
            )
          })}
      </span>
    </section>
  )
}