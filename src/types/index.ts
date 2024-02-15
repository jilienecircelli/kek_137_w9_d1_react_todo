
export type Task = {
  id: number,
  name: string,
  description: string,
  dateCreated: Date,
  completed: boolean,
  dueDate?: Date
}

export type TaskFormObject = {
  name:string,
  description:string,
  dueDate:string
}