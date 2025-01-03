export type Status = "TODO" | "IN_PROGRESS" | "TO_TEST" | "DONE";

export type Task = {
  id: number;
  status: Status;
  title: string;
  description: string;
};

export type Column = {
  id: Status;
  title: string;
};
