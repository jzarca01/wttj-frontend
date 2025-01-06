import { useSortable } from "@dnd-kit/sortable";

import { Task } from "../types";

type Props = {
  task: Task;
};

export const Card = ({ task }: Props) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: task.id,
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md"
      style={style}
      {...listeners}
      {...attributes}
    >
      <h3 className="font-medium text-neutral-100">{task.title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{task.description}</p>
    </div>
  );
};
