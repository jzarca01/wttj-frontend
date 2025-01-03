import { useState } from "react";

import { Header } from "./components/Header";
import { Column } from "./components/Column";

import type { Task, Column as ColumnType } from "./types";

import "./App.css";

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
    id: 2,
    status: "TODO",
    title: "Ajouter droppable",
    description: "baz",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  return (
    <>
      <Header />

      <div className="p-4">
        <div className="flex gap-8">
          {COLUMNS.map((column: ColumnType) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
