import { Card } from "./Card";

import { Column as ColumnType, Task } from "../types";

type Props = {
  tasks: Task[];
  column: ColumnType;
};

export const Column = ({ column, tasks }: Props) => {
  return (
    <div className="flex w-80 flex-col rounded-lg bg-neutral-800 p-4">
      <h2 className="mb-4 font-semibold text-neutral-100">{column.title}</h2>
      <div className="flex flex-1 flex-col gap-4">
        {tasks.map((task) => {
          return <Card key={task.id} task={task} />;
        })}
      </div>
    </div>
  );
};
