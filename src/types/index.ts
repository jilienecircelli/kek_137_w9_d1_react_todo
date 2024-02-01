

export type ToDoItem = {
  id: number,
  name: string,
  description: string,
  dateCreated: Date,
  completed: boolean,
  dueDate?: Date
}

export type ToDoFormObject = {
  name:string,
  description:string,
  dueDate:string
}