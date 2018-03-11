const editPost = event => {
  
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