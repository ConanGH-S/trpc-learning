import { z } from "zod";
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

import { publicProcedure, router } from "../trpc";

import { todos } from "@/db/schema";

const sqlite = new Database('sqlite.db')
const db = drizzle(sqlite)

export const todoRouter = router({
  getTodos: publicProcedure.query(() => {
    return db.select().from(todos).all()
  }),
  createTodo: publicProcedure.input(z.string())
    .mutation((req) => {
      db.insert(todos).values({ content: req.input }).run()
      return true
    })
})

export type TodoRouter = typeof todoRouter