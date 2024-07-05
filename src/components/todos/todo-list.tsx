'use client'
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { Checkbox } from "../ui/checkbox";

export default function TodoList() {
  //to call from client using useQuery from the convex.react package
  const todos = useQuery(api.todos.get) ?? [];//if todos is undefined, then it will be an empty array
   //querying what we wrote in todos
  //since useQuery shd be a use client
  if (todos === undefined) {
    //meaning still loading
    <p>Loading...</p>;
  }
  return (
    <div className="xl:p-40">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Inbox</h1>
      </div>
      <div className="flex flex-col gap-1 py-4">
        <div className="flex items-center space-x-2">
            {todos.map(({taskName},idx)=>{
                return(
                    <div key={idx} className="flex items-center space-x-2">
                        <Checkbox id="todo" />
                        <label
                            htmlFor="todo"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            {taskName}
                        </label>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  );
}

