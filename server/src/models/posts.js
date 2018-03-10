const fs = require('fs')
const path = require('path')
const postsPath = path.join(__dirname, 'posts.json')
const uuid = require('uuid/v4')

const getAll = () => {
  let posts = fs.readFileSync(postsPath, 'utf-8')
  return posts
}

const getOne = (params) => {
console.log('pppppp', params)
  
  let errors = []
  let id = params.id
  let posts = fs.readFileSync(postsPath, 'utf-8')
  let postsArr = JSON.parse(posts)
  let postFound = postsArr.find(post => post.id === id)
  let response 
console.log('ffffff', postFound)
  if(postFound) {
    response = postFound
  } else {
    errors.push('Post not found')
    response = { errors }
  }
  return response
}

const create = (body) => {
  console.log('bbbb', body)
  let errors = []
  let title = body.title
  let content = body.content
  let posts = fs.readFileSync(postsPath, 'utf-8')
  let postsArr = JSON.parse(posts)
  let post = {}
  let response

  if(title && content) {

    post = {
      id: uuid(),
      title,
      content
    }

    postsArr.push(post)

    let updatedPosts = JSON.stringify(postsArr)
    fs.writeFileSync(postsPath, updatedPosts)
    response = post
  } else {
    errors.push('Both title and content are required')
    response = { errors }
  }
  return response
}

const update = (params, body) => {
  let errors = []
  let id = params.id
  let title = body.title
  let content = body.content
  let posts = fs.readFileSync(postsPath, 'utf-8')
  let postsArr = JSON.parse(posts)
  let response

  let postFound = postsArr.find(post => post.id === id)

  if(!postFound) {
      errors.push('Post not found')
      response = errors
    } else if (postFound && title && content) {
      postsArr.forEach(post => {
        if(post.id === id) {
          post.title = title
          post.content = content
          response = post
        }
      })
    } else {
      errors.push('All fields required')
      response = { errors }
    }

  let updatedPosts = JSON.stringify(postsArr)
  fs.writeFileSync(postsPath, updatedPosts)
  return response
}

const del = (params) => {
  let errors = []
  let id = params.id
  let posts = fs.readFileSync(postsPath, 'utf-8')
  let postsArr = JSON.parse(posts)
  let response
  let postFound = postsArr.find(post => post.id === id)
  let index = postsArr.indexOf(postFound)
console.log('ppppfffff', postFound)
  if(postFound) {
    response = postFound
    postsArr.splice(index, 1)
    let updatedPosts = JSON.stringify(postsArr)
    fs.writeFileSync(postsPath, updatedPosts)
  } else {
    errors.push('Post not found')
    console.log('eeeee', errors)
    response = { errors }
  }
  console.log('rrreeeeesssss', response)
  return response
}

module.exports = { getAll, getOne, create, update, del }