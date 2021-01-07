import { defineController } from './$relay'
import { getProjects, createProject } from '$/service/projects'

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: (await getProjects()).slice(0, query?.limit)
  }),
  post: async ({ body }) => ({
    status: 201,
    body: await createProject(body)
  })
}))
