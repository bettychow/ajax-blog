
 baseURL = 'http://localhost:8000'

const createButton = document.querySelector('#create')
const currentPost = document.querySelector('#current-post')

const createNewPost = (title, content) => {
    axios.post(`${baseURL}/posts`, {title, content})
      .then(result => {
        console.log('rrrr', result)

        const titleReturned = result.data.title
        const contentReturned = result.data.content
        const postId = result.data.id

        const post = document.querySelector('.post')
        console.log('posssst', post)
        const titleLabel = currentPost.querySelector('#title-label')
        const titleText = currentPost.querySelector('#title-text')
        const titleInput = currentPost.querySelector('#title-input')
        const contentLabel = currentPost.querySelector('#content-label')
        const contentText = currentPost.querySelector('#content-text')
        const contentInput = currentPost.querySelector('#content-input')
        const newPostButton = currentPost.querySelector('#new-post-button')
        const editButton = document.createElement('button')
        const deleteButton = document.createElement('button')

        titleLabel.style.display = 'none'
        titleText.innerHTML = titleReturned
        titleInput.style.display = 'none'
        
        contentLabel.style.display = 'none'
        contentText.innerHTML = contentReturned
        contentInput.style.display = 'none'

        newPostButton.style.display = 'none'

        editButton.innerHTML = 'edit'
        editButton.id = 'edit-button'
        editButton.onclick = editPost
        deleteButton.innerHTML = 'delete'
        deleteButton.id = 'delete-button'
        deleteButton.onclick = deletePost

        post.appendChild(editButton)
        post.appendChild(deleteButton)

        const list = document.querySelector('#list')
        const navBar = document.querySelector('#nav-bar')
        const postItem = document.createElement('li')
        
        postItem.onclick = renderPost
        postItem.id = postId
        post.id = postId
        
        postItem.innerHTML = titleText.innerHTML
        navBar.appendChild(postItem)
        list.appendChild(navBar)
      })

}

const renderPost = event => {
  console.log('eeeeee', event.target.id)
  const postId = event.target.id
  axios.get(`${baseURL}/posts/${postId}`)
    .then(result => {
      console.log('rrrrppppresult', result)

      const titleText = document.querySelector('#title-text')
      const contentText = document.querySelector('#content-text')
      titleText.innerHTML = result.data.title
      contentText.innerHTML = result.data.content
    })
}

const editPost = event => {
  console.log('vvvvvv', event)

  const post = event.target.parentNode
  const titleLabel = post.querySelector('#title-label')
  const titleText = post.querySelector('#title-text')
  const contentLabel = post.querySelector('#content-label')
  const contentText = post.querySelector('#content-text')
  const titleInput = post.querySelector('#title-input')
  const contentInput = post.querySelector('#content-input')
  const updateButton = document.createElement('button')
  const editButton = post.querySelector('#edit-button')
  const deleteButton = post.querySelector('#delete-button')
  
  updateButton.id = 'update-button'
  updateButton.innerHTML = 'Update'
  updateButton.onclick = updatePost
  //post.className = 'editMode'

  titleLabel.style.display = 'block'
  contentLabel.style.display = 'block'
    titleInput.value = titleText.innerHTML
    contentInput.value = contentText.innerHTML
    titleInput.style.display = 'block'
    contentInput.style.display = 'block'
    titleText.style.display = 'none'
    contentText.style.display = 'none'


  editButton.style.display = 'none'
  deleteButton.style.display = 'none'

  const currentUpdateButton = post.querySelector('#update-button')

  if(currentUpdateButton) {
    currentUpdateButton.style.display = 'inline'
  } else {
    post.appendChild(updateButton)
  }
  
}

const deletePost = (event) => {
  const post = event.target.parentNode
  const postId = post.id


  
  axios.delete(`${baseURL}/posts/${postId}`)
    .then(result => {
      console.log('ggggggg', result)
    })
}



const updatePost = event => {
  const post = event.target.parentNode
  console.log('parrrrrrr', event)
  const postId = event.target.parentNode.id

  console.log('iiidddddd', postId)
  const titleLabel = post.querySelector('#title-label')
  const contentLabel = post.querySelector('#content-label')
  const titleInput = post.querySelector('#title-input')
  const contentInput = post.querySelector('#content-input')
  const titleText = post.querySelector('#title-text')
  const contentText = post.querySelector('#content-text')
  const updateButton = post.querySelector('#update-button')
  const editButton = post.querySelector('#edit-button')
  const deleteButton = post.querySelector('#delete-button')

  titleLabel.style.display = 'none'
  contentLabel.style.display = 'none'
  titleInput.style.display = 'none'
  contentInput.style.display = 'none'
  titleText.innerHTML = titleInput.value
  contentText.innerHTML = contentInput.value
  titleText.style.display = 'block'
  contentText.style.display = 'block'

  updateButton.style.display = 'none'
  editButton.style.display = 'inline'
  deleteButton.style.display = 'inline'

  const postItem = document.querySelector(`#x-${postId}`)
console.log('poooooo', postItem)
  postItem.innerHTML = titleInput.value

  axios.put(`${baseURL}/posts/${postId}`, {title: titleInput.value, content: contentInput.value})

}

createButton.addEventListener('click', () => {
  let post = document.createElement('div')
  post.className = "post"
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
  let newPostButton = document.createElement('button')
  newPostButton.innerHTML = "Create!"
  newPostButton.id = "new-post-button"
  newPostButton.addEventListener('click', () => {
    const titleInputVal = document.querySelector('#title-input').value
    const contentInputVal = document.querySelector('#content-input').value
    titleLabel.style.display = 'none'
    contentLabel.style.display = 'none'
    createNewPost(titleInputVal, contentInputVal)
  })

  while (currentPost.firstChild) {
    currentPost.removeChild(currentPost.firstChild);
  }

  post.appendChild(titleLabel)
  post.appendChild(titleText)
  post.appendChild(titleInput)
  post.appendChild(contentLabel)
  post.appendChild(contentText)
  post.appendChild(contentInput)
  post.appendChild(newPostButton)

  currentPost.appendChild(post)
})