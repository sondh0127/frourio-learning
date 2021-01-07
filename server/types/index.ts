export type UserInfo = {
  id: string
  name: string
  icon: string
}

export type AuthHeader = {
  authorization: string
}

export type Task = {
  id: number
  label: string
  done: boolean
}

export enum ProjectType {
  TextClassificationProject = 'Sentiment Analysis',
  SequenceLabelingProject = 'Named Entity Recognition',
  Seq2seqProject = 'Translation',
  PdfLabelingProject = 'PDF Labeling'
}

export type Project = {
  id: number
  // userId: string
  createdAt: Date
  updatedAt?: Date
  name: string
  description: string
  guideline: string
  // projectType: ProjectType
  published: boolean
  randomizeDocumentOrder: boolean
  collaborativeAnnotation: boolean
  annotatorPerExample: number
}
