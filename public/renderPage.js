let baseURL = 'https://salty-chamber-77736.herokuapp.com/'

const currentPost = document.querySelector('#current-post')
const navBar = document.querySelector('#nav-bar')

document.addEventListener("DOMContentLoaded", event => {

  axios.get(`${baseURL}/posts`)
    .then(result => {
      const postsArr = JSON.parse(result.data)

      postsArr.forEach(post => {
        const postItem = document.createElement('li')
        postItem.id = `x-${post.id}`
        postItem.className = 'post-item'
        postItem.innerHTML = post.title
        postItem.onclick = renderOnePost
        navBar.appendChild(postItem)
      }) 

      const lastPost = postsArr[postsArr.length-1] 
      const postId = lastPost.id

      const post = document.createElement('div')
      post.className = "post"
      post.id = postId
      const titleLabel = document.createElement('label')
      titleLabel.for = "title-input"
      titleLabel.innerHTML = "Title"
      titleLabel.id = 'title-label'
      const titleInput = document.createElement('input')
      titleInput.type = "text"
      titleInput.id = "title-input"
      const titleText = document.createElement('label')
      titleText.id = 'title-text'
      const contentLabel = document.createElement('label')
      contentLabel.for = "content-input"
      contentLabel.innerHTML = "Content"
      contentLabel.id = 'content-label'
      const contentInput = document.createElement('textarea')
      contentInput.type = "text"
      contentInput.id = "content-input"
      const contentText = document.createElement('label')
      contentText.id = 'content-text'
      const newPostButton = document.createElement('button')
      const editButton = document.createElement('button')
      const deleteButton = document.createElement('button')

      titleText.innerHTML = lastPost.title
      contentText.innerHTML = lastPost.content

      titleLabel.style.display = 'none'
      titleInput.style.display = 'none'
      contentLabel.style.display = 'none'
      contentInput.style.display = 'none'

      newPostButton.id = 'new-post-button'
      newPostButton.innerHTML = 'Create!'
      newPostButton.onlick = createNewPost
      newPostButton.style.display = 'none'
      newPostButton.onclick = createNewPost

      editButton.innerHTML = 'edit'
      editButton.id = 'edit-button'
      editButton.onclick = editPost
      deleteButton.innerHTML = 'delete'
      deleteButton.id = 'delete-button'
      deleteButton.onclick = deletePost

      post.appendChild(titleLabel)
      post.appendChild(titleText)
      post.appendChild(titleInput)
      post.appendChild(contentLabel)
      post.appendChild(contentText)
      post.appendChild(contentInput)
      post.appendChild(newPostButton)
      post.appendChild(editButton)
      post.appendChild(deleteButton)

      while(currentPost.firstChild) {
        currentPost.removeChild(currentPost.firstChild)
      }
      currentPost.appendChild(post)
    })
})