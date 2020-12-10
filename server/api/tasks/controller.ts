import { defineController } from './$relay'
import { getTasks, createTask } from '$/service/tasks'

export default defineController(() => ({
  get: async ({ query }) => ({
    status: 200,
    body: (await getTasks()).slice(0, query?.limit)
  }),
  post: async ({ body }) => ({
    status: 201,
    body: await createTask(body.label)
  })
}))
