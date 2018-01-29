export interface IInsertTaskRequest {
  title: string
  description: string
}

export class Task {
  public _id: string

  constructor(
    public title: string,
    public description: string,
    public status: 'COMPLETED' | 'NOTCOMPLETED'
  ) { }

  public static vaidateInsertRequest = (insertRequest: IInsertTaskRequest): Promise<Task> => {
    return new Promise((resolve, reject) => {
      if (insertRequest.title && insertRequest.description) {
        const blogData = new Task(
          insertRequest.title,
          insertRequest.description,
          "NOTCOMPLETED"
        )
        resolve(blogData)
      } else {
        reject('Bad request')
      }

    })
  }
}