import { todoRouter } from "@/server/routers/todo";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => 
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: todoRouter,
    createContext: () => ({})
  })

export {handler as GET, handler as POST}