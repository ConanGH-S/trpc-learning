import { TodoRouter } from "@/server/routers/todo";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<TodoRouter>({})