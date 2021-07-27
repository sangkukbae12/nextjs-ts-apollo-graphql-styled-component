import React from 'react'
import styled from 'styled-components'

export interface Job {
  id: string
  applyUrl: string
  title: string
  company: {
    name: string
  }
}

interface Props {
  jobs: Job[]
}

const List = styled.ul``

const ListItem = styled.li`
  margin-bottom: .5rem;
`

const Jobs = ({ jobs }: Props) => {
  return (
    <List>
      {jobs.map(job => (
        <ListItem key={job.id}>
          {job.title} by {job.company.name} [<a href={job.applyUrl} target="_blank">Apply</a>]
        </ListItem>
      ))}
    </List>
  )
}

export default Jobs