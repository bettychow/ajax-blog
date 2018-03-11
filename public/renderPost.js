const renderOnePost = (event) => {
  const postId = event.target.id.slice(2)

  axios.get(`${baseURL}/posts/${postId}`)
    .then(result => {
      const post = document.querySelector('.post')
      post.id = postId
      const titleLabel = post.querySelector('#title-label')
      const titleText = document.querySelector('#title-text')
      const contentLabel = post.querySelector('#content-label')
      const contentText = post.querySelector('#content-text')
      const titleInput = post.querySelector('#title-input')
      const contentInput = post.querySelector('#content-input')
      const updateButton = document.querySelector('#update-button')
      const editButton = post.querySelector('#edit-button')
      const deleteButton = post.querySelector('#delete-button')
      const newPostButton = post.querySelector('#new-post-button')

      titleLabel.style.display = 'none'
      titleText.innerHTML = result.data.title
      titleText.style.display = 'block'
      titleInput.style.display = 'none'
      contentLabel.style.display = 'none'
      contentText.innerHTML = result.data.content
      contentText.style.display = 'block'
      contentInput.style.display = 'none'
      editButton.style.display = 'inline'
      deleteButton.style.display = 'inline'
      if(updateButton) {
        updateButton.style.display = 'none'
      }
      if(newPostButton) {
        newPostButton.style.display = 'none'
      }
    })
}