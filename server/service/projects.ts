import { PrismaClient } from '@prisma/client'
import { Project, Prisma } from '$prisma/client'

const prisma = new PrismaClient()

export const getProjects = async (limit?: number) =>
  (await prisma.project.findMany()).slice(0, limit)

export const createProject = (data: Pick<Project, 'name' | 'description'>) =>
  prisma.project.create({ data })

export const updateProject = (id: Project['id'], partialProject: Prisma.ProjectUpdateInput) =>
  prisma.project.update({ where: { id }, data: partialProject })

export const deleteProject = (id: Project['id']) => prisma.project.delete({ where: { id } })

export const findProject = (id: Project['id']) => prisma.project.findUnique({ where: { id } })
