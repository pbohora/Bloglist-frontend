import React, { useState, useEffect } from 'react'
import LoginForm from './components/LoginForm'
import BlogList from './components/BLogs/BlogList'
import BlogpostForm from './components/BlogpostForm'
import Notification from './components/Notification'
import { login } from './services/login'
import { getAll, create, update, setToken } from './services/blog'

const App = () => {
  const [blog, setBlog] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [newBlog, setNewBlog] = useState({ title: '', author: '', url: '' })
  const [sucessMessage, setSucessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    getAll().then(returnedBlog => setBlog(returnedBlog))
  }, [])

  useEffect(() => {
    const loggedUser = window.localStorage.getItem('loggedBLogUser')
    if (loggedUser) {
      const user = JSON.parse(loggedUser)
      setUser(user)
      setToken(user.token)
      console.log(user.token)
    }
  }, [])

  const sucessStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20',
    borderStyle: 'solid',
    borderRadius: '5',
    padding: '10',
    marginBottom: '10'
  }

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20',
    borderStyle: 'solid',
    borderRadius: '5',
    padding: '10',
    marginBottom: '10'
  }

  const handleChange = e => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value })
    //console.log(newBlog)
  }
  const handleBlogSubmit = async e => {
    e.preventDefault()
    const returnBlog = await create(newBlog)

    setBlog([...blog, returnBlog])
    setSucessMessage(
      `A new blog ${newBlog.title} by ${newBlog.author} is created`
    )
    setTimeout(() => {
      setSucessMessage(null)
    }, 5000)
    setNewBlog({ title: '', author: '', url: '' })
  }

  const handleUsernameChange = e => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const user = await login({ username, password })

      window.localStorage.setItem('loggedBLogUser', JSON.stringify(user))
      setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('Wrong username or password')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = e => {
    e.preventDefault()
    setUser(null)
    window.localStorage.clear()
  }

  return (
    <div>
      <Notification message={sucessMessage} style={sucessStyle} />
      <Notification message={errorMessage} style={errorStyle} />
      {user === null ? (
        <LoginForm
          handleUsernameChange={handleUsernameChange}
          handlePasswordChange={handlePasswordChange}
          handleLogin={handleLogin}
          username={username}
          password={password}
        />
      ) : (
        <div>
          <p>{`logged in as ${user.name}`}</p>
          <button onClick={handleLogout}>log out</button>
          <BlogpostForm
            onBlogSubmit={handleBlogSubmit}
            handleChange={handleChange}
            newBlog={newBlog}
          />
        </div>
      )}

      <BlogList blogs={blog} />
    </div>
  )
}

export default App
