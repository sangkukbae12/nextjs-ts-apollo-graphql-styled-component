import React from 'react'
import { useQuery } from "@apollo/client";
import { gql } from "apollo-boost"
import Jobs from "./Jobs";


const Index = () => {
  const JOBS_QUERY = gql`
    query {
      jobs {
        id
        title
        applyUrl
        company {
          name
        }
      }
    }
  `

  const jobs = useQuery(JOBS_QUERY)
  
  return (
    <div>
      <h1>GraphQL Job Board</h1>
      <p>A list of open GraphQL jobs</p>
      <Jobs jobs={jobs?.data?.jobs || []} /> 
    </div>
  ) 
}

export default Index;