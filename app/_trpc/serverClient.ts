import { todoRouter } from "@/server/routers/todo";
import { createCallerFactory } from "@/server/trpc";

const createCaller = createCallerFactory(todoRouter)

export const caller = createCaller({})