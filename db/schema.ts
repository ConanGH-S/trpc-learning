import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todos = sqliteTable('todos', {
  id: integer('id').primaryKey(),
  content: text('content'),
  completed: integer('completed', { mode: 'boolean' }).default(false),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date()),
})