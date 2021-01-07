import { useState, useCallback } from 'react'
import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'

const Project = () => {
  const { data: projects, error, mutate: setProjects } = useAspidaSWR(apiClient.project, {
    query: { limit: 10 }
  })

  if (error) return <div>failed to load</div>
  if (!projects) return <div>loading...</div>

  const createProject = useCallback(async () => {
    await apiClient.project
    setProjects(await apiClient.project.$get())
  }, [])

  return (
    <div>
      Project List
      <div>
        {projects.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </div>
      <button onClick={createProject}>Create project</button>
    </div>
  )
}

export default Project
