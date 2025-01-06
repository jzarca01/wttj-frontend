import { useState } from "react";

import { DndContext, DragEndEvent } from "@dnd-kit/core";

import { Header } from "./components/Header";
import { Column } from "./components/Column";

import type { Task, Column as ColumnType } from "./types";

const COLUMNS: ColumnType[] = [
  { id: "TODO", title: "Todo" },
  { id: "IN_PROGRESS", title: "In progress" },
  { id: "TO_TEST", title: "To test" },
  { id: "DONE", title: "Done" },
];
const INITIAL_TASKS: Task[] = [
  {
    id: 1,
    status: "IN_PROGRESS",
    title: "Creer composants Card, Column",
    description: "foo",
  },
  {
    id: 2,
    status: "TODO",
    title: "Ajouter draggable",
    description: "bar",
  },
  {
    id: 3,
    status: "TODO",
    title: "Ajouter droppable",
    description: "baz",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  function onDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id as Task["status"];

    setTasks(() =>
      tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      )
    );
  }

  return (
    <>
      <Header />

      <div className="p-4">
        <div className="flex gap-8">
          <DndContext onDragEnd={onDragEnd}>
            {COLUMNS.map((column: ColumnType) => {
              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={tasks.filter((task) => task.status === column.id)}
                />
              );
            })}
          </DndContext>
        </div>
      </div>
    </>
  );
}

export default App;
