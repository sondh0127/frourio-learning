import { Project } from '$/types'

export type Methods = {
  get: {
    query?: {
      limit: number
    }
    resBody: Project[]
  }
  post: {
    reqBody: Pick<Project, 'name' | 'description'>
    resBody: Project
  }
}
