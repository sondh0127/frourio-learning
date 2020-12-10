import { defineController } from './$relay'
import { updateTask, deleteTask, findTask } from '$/service/tasks'

export default defineController(() => ({
  patch: async ({ body, params }) => {
    await updateTask(params.taskId, body)
    return { status: 204 }
  },
  delete: async ({ params }) => {
    await deleteTask(params.taskId)
    return { status: 204 }
  },
  get: async ({ params }) => {
    const task = await findTask(params.taskId)

    return task ? { status: 200, body: task } : { status: 404 }
  }
}))
