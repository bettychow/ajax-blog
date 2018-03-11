
const updatePost = event => {
    const post = event.target.parentNode
    const postId = event.target.parentNode.id
    const titleLabel = post.querySelector('#title-label')
    const contentLabel = post.querySelector('#content-label')
    const titleInput = post.querySelector('#title-input')
    const contentInput = post.querySelector('#content-input')
    const titleText = post.querySelector('#title-text')
    const contentText = post.querySelector('#content-text')
    const updateButton = post.querySelector('#update-button')
    const editButton = post.querySelector('#edit-button')
    const deleteButton = post.querySelector('#delete-button')
    const postItem = document.querySelector(`#x-${postId}`)

    if(titleInput.value) {
      titleText.innerHTML = titleInput.value
      postItem.innerHTML = titleInput.value
    }

    if(contentInput.value) {
      contentText.innerHTML = contentInput.value
    }

    titleLabel.style.display = 'none'
    contentLabel.style.display = 'none'
    titleInput.style.display = 'none'
    contentInput.style.display = 'none'
    titleText.style.display = 'block'
    contentText.style.display = 'block'

    updateButton.style.display = 'none'
    editButton.style.display = 'inline'
    deleteButton.style.display = 'inline'

    axios.put(`${baseURL}/posts/${postId}`, {title: titleInput.value, content: contentInput.value})
  }