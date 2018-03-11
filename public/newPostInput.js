
const newPostForm = () => {
  const post = document.querySelector('.post')
  const titleLabel = document.querySelector('#title-label')
  const titleInput = document.querySelector('#title-input')
  const titleText = document.querySelector('#title-text')
  const contentLabel = document.querySelector('#content-label')
  const contentInput = document.querySelector('#content-input')
  const contentText = document.querySelector('#content-text')
  const newPostButton = document.querySelector('#new-post-button')
  const editButton = post.querySelector('#edit-button')
  const deleteButton = post.querySelector('#delete-button')
  
  titleLabel.style.display = 'block'
  titleInput.style.display = 'block'
  titleInput.value = ''
  titleText.style.display = 'none'
  contentLabel.style.display = 'block'
  contentInput.style.display = 'block'
  contentInput.value = ''
  contentText.style.display = 'none'
  editButton.style.display = 'none'
  deleteButton.style.display = 'none'
  newPostButton.style.display = 'block'

}

const createButton = document.querySelector('#create')

createButton.onclick = newPostForm


// createButton.addEventListener('click', () => {
//   const post = document.querySelector('.post')
//   const titleLabel = document.querySelector('#title-label')
//   const titleInput = document.querySelector('#title-input')
//   const titleText = document.querySelector('#title-text')
//   const contentLabel = document.querySelector('#content-label')
//   const contentInput = document.querySelector('#content-input')
//   const contentText = document.querySelector('#content-text')
//   const newPostButton = document.querySelector('#new-post-button')
//   const editButton = post.querySelector('#edit-button')
//   const deleteButton = post.querySelector('#delete-button')
  
//   titleLabel.style.display = 'block'
//   titleInput.style.display = 'block'
//   titleInput.value = ''
//   titleText.style.display = 'none'
//   contentLabel.style.display = 'block'
//   contentInput.style.display = 'block'
//   contentInput.value = ''
//   contentText.style.display = 'none'
//   editButton.style.display = 'none'
//   deleteButton.style.display = 'none'
//   newPostButton.style.display = 'block'
// })