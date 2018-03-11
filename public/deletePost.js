const deletePost = (event) => {
  const post = event.target.parentNode
  const postId = post.id

  const currentPost = document.querySelector('.post')
  const titleText = document.querySelector('#title-text')
  const contentText = post.querySelector('#content-text')
  const navBar =document.querySelector('#nav-bar')

  const postItem = document.querySelector(`#x-${postId}`)
  postItem.parentNode.removeChild(postItem)

  axios.delete(`${baseURL}/posts/${postId}`)
  
  const id = navBar.lastChild.id.slice(2)
  
  axios.get(`${baseURL}/posts/${id}`)
    .then(result => {
      titleText.innerHTML = result.data.title
      contentText.innerHTML = result.data.content
      currentPost.id = result.data.id
    })
}