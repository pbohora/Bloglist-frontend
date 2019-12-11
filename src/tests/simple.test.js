import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

test('Renders content', () => {
  const blog = {
    title: 'react vs angular',
    author: 'Raame',
    likes: 3
  }

  const onClick = jest.fn()

  const component = render(<SimpleBlog blog={blog} onClick={onClick} />)

  const title = component.container.querySelector('.header')
  //const author = component.getAllByText('')
  const likes = component.container.querySelector('.likes')

  expect(title).toHaveTextContent('react vs angular Raame')
  //expect(author).toHaveTextContent('Raame')
  expect(likes).toHaveTextContent('blog has 3 likes')

  const button = component.getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(onClick.mock.calls.length).toBe(2)
})

test('blog component initially shows title and author', () => {})
