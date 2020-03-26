Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3006/api/login', {
    username,
    password
  }).then(({ body }) => {
    console.log(body)
    window.localStorage.setItem('loggedBLogUser', JSON.stringify(body))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('createBlog', ({ title, author, url }) => {
  cy.request({
    url: 'http://localhost:3006/api/blogs',
    method: 'POST',
    body: { title, author, url },
    headers: {
      Authorization: `bearer ${
        JSON.parse(localStorage.getItem('loggedBLogUser')).token
      }`
    }
  })

  cy.visit('http://localhost:3000/blogs')
})
