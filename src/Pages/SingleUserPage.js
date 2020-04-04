import React from 'react'
import Layout from '../components/Layout'
import Section from '../components/Section/Section'
import Users from '../components/Users'

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const SingleUserPage = ({ user, handleLogOut }) => {
  const users = useSelector(({ users }) => {
    return users
  })
  const id = useParams().id
  const selectedUser = users.find((user) => user.id === id)
  console.log(selectedUser)
  return (
    <Layout user={user} handleLogOut={handleLogOut}>
      <Section sectionTitle='User' background={true}>
        {selectedUser && (
          <div>
            <h2>{selectedUser.name}</h2>
            <h3>Added blogs</h3>
            <ul>
              {selectedUser.blogs.map((blog) => (
                <li key={blog.id}>{blog.title}</li>
              ))}
            </ul>
          </div>
        )}
      </Section>
    </Layout>
  )
}

export default SingleUserPage
