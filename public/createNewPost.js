
const createNewPost = () => {
  const title = document.querySelector('#title-input').value
  const content= document.querySelector('#content-input').value
  axios.post(`${baseURL}/posts`, {title, content})
    .then(result => {

      const titleReturned = result.data.title
      const contentReturned = result.data.content
      const postId = result.data.id

      const post = document.querySelector('.post')
      const titleLabel = post.querySelector('#title-label')
      const titleText = post.querySelector('#title-text')
      const titleInput = post.querySelector('#title-input')
      const contentLabel = post.querySelector('#content-label')
      const contentText = post.querySelector('#content-text')
      const contentInput = post.querySelector('#content-input')
      const newPostButton = post.querySelector('#new-post-button')
      const editButton = post.querySelector('#edit-button')
      const deleteButton = post.querySelector('#delete-button')
      

      titleLabel.style.display = 'none'
      titleText.innerHTML = titleReturned
      titleText.style.display = 'block'
      titleInput.style.display = 'none'
      
      contentLabel.style.display = 'none'
      contentText.innerHTML = contentReturned
      contentText.style.display = 'block'
      contentInput.style.display = 'none'

      newPostButton.style.display = 'none'
      editButton.style.display = 'inline'
      deleteButton.style.display = 'inline'

      const list = document.querySelector('#list')
      const navBar = document.querySelector('#nav-bar')
      const postItem = document.createElement('li')
      
      postItem.onclick = renderOnePost
      postItem.id = `x-${postId}`
      post.id = postId
      
      postItem.innerHTML = titleText.innerHTML
      navBar.appendChild(postItem)
      list.appendChild(navBar)
    })
}