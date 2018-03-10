let baseURL = 'http://localhost:8000'

const navBar = document.querySelector('#nav-bar')
//const currentPost = document.querySelector('#current-post')

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed")

  axios.get(`${baseURL}/posts`)
    .then(result => {
      console.log('ttttttt', result)

      const postsArr = JSON.parse(result.data)

     postsArr.forEach(post => {
       const postItem = document.createElement('li')
       postItem.id = `x-${post.id}`
       postItem.className = 'post-item'
       postItem.innerHTML = post.title
       postItem.onclick = renderOnePost
       navBar.appendChild(postItem)
     })
      
    })

    const renderOnePost = (event) => {
      const postId = event.target.id.slice(2)

      axios.get(`${baseURL}/posts/${postId}`)
        .then(result => {

          let post = document.createElement('div')
          post.className = "post"
          post.id = postId
          let titleLabel = document.createElement('label')
          titleLabel.for = "title-input"
          titleLabel.innerHTML = "Title"
          titleLabel.id = 'title-label'
          let titleInput = document.createElement('input')
          titleInput.type = "text"
          titleInput.id = "title-input"
          let titleText = document.createElement('label')
          titleText.id = 'title-text'
          let contentLabel = document.createElement('label')
          contentLabel.for = "content-input"
          contentLabel.innerHTML = "Content"
          contentLabel.id = 'content-label'
          let contentInput = document.createElement('textarea')
          contentInput.type = "text"
          contentInput.id = "content-input"
          let contentText = document.createElement('label')
          contentText.id = 'content-text'
          const newPostButton = document.createElement('button')
          const editButton = document.createElement('button')
          const deleteButton = document.createElement('button')

            titleText.innerHTML = result.data.title
            contentText.innerHTML = result.data.content

            titleLabel.style.display = 'none'
            titleInput.style.display = 'none'
            contentLabel.style.display = 'none'
            contentInput.style.display = 'none'

            newPostButton.id = '#new-post-button'
            newPostButton.innerHTML = 'Create!'
            newPostButton.onlick = createNewPost
            newPostButton.style.display = 'none'

            editButton.innerHTML = 'edit'
            editButton.id = 'edit-button'
            editButton.onclick = editPost
            deleteButton.innerHTML = 'delete'
            deleteButton.id = 'delete-button'
            deleteButton.onclick = deletePost

          // let newPostButton = document.createElement('button')
          // newPostButton.innerHTML = "Create!"
          // newPostButton.id = "new-post-button"
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
    }

})