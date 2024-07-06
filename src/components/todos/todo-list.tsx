'use client'
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Checkbox } from "../ui/checkbox";
import Todos from "./todos";
import CompletedTodos from "./CompletedTodos";

export default function TodoList() {
  //to call from client using useQuery from the convex.react package
  const todos = useQuery(api.todos.get) ?? [];//if todos is undefined, then it will be an empty array
   //querying what we wrote in todos
  //since useQuery shd be a use client
  const completedTodos = useQuery(api.todos.completedTodos) ?? [];
  const inCompleteTodos = useQuery(api.todos.incompleteTodos) ?? [];
  const totalTodos = useQuery(api.todos.totalTodos)?? 0;
  if (todos === undefined || completedTodos===undefined || inCompleteTodos === undefined) {
    //meaning still loading
    <p>Loading...</p>;
  }
  return (
    <div className="xl:px-40">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>
      <div className="flex flex-col gap-1 py-4">
        <Todos items={inCompleteTodos} />
      </div>
      <div className="flex flex-col gap-1 py-4">
        <Todos items={completedTodos} />
      </div>
      <CompletedTodos totalTodos={totalTodos} />
    </div>
  );
}

