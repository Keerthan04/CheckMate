import { Checkbox } from "../ui/checkbox";

export default function Task({taskName,_id,isCompleted}) {
  return (
    <div key={_id} className="flex items-center space-x-2">
    <Checkbox id="todo" />
    <label
        htmlFor="todo"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
        {taskName}
    </label>
</div>
  )
}
