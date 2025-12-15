// Minimal feed implementation: posts, likes and comments
const posts = [
  { id: 1, user: 'alice', image: 'https://picsum.photos/800/600?random=1', caption: 'Morning vibes', likes: 12, liked: false, comments: ['Nice!', 'Love it'] },
  { id: 2, user: 'bobby', image: 'https://picsum.photos/800/600?random=2', caption: 'On the road', likes: 5, liked: false, comments: [] },
  { id: 3, user: 'carol', image: 'https://picsum.photos/800/600?random=3', caption: 'Coffee time ☕', likes: 34, liked: false, comments: ['Where is this?'] },
  { id: 4, user: 'dan', image: 'https://picsum.photos/800/600?random=4', caption: 'Sunset', likes: 9, liked: false, comments: [] },
  { id: 5, user: 'eva', image: 'https://picsum.photos/800/600?random=5', caption: 'City lights', likes: 3, liked: false, comments: [] }
]

const feed = document.getElementById('feed')

function createPostElement(post){
  const article = document.createElement('article')
  article.className = 'post'
  article.dataset.id = post.id

  // header
  const header = document.createElement('div')
  header.className = 'post-header'
  header.innerHTML = `
    <div class="avatar" aria-hidden="true"></div>
    <div>
      <div class="post-user">${post.user}</div>
      <div class="muted">Just now</div>
    </div>
  `
  article.appendChild(header)

  // image
  const img = document.createElement('img')
  img.className = 'post-image'
  img.src = post.image
  img.alt = post.caption || 'Post image'
  article.appendChild(img)

  // actions
  const actions = document.createElement('div')
  actions.className = 'post-actions'

  const likeBtn = document.createElement('button')
  likeBtn.className = 'like-btn'
  likeBtn.innerHTML = post.liked ? '❤' : '♡'
  if(post.liked) likeBtn.classList.add('liked')
  likeBtn.setAttribute('aria-pressed', String(post.liked))
  likeBtn.setAttribute('aria-label', post.liked ? 'Unlike post' : 'Like post')
  likeBtn.title = post.liked ? 'Unlike' : 'Like'

  const likesCount = document.createElement('div')
  likesCount.className = 'likes-count'
  likesCount.textContent = `${post.likes} ${post.likes === 1 ? 'like' : 'likes'}`

  actions.appendChild(likeBtn)
  actions.appendChild(likesCount)
  article.appendChild(actions)

  // caption
  const caption = document.createElement('div')
  caption.className = 'post-caption'
  caption.innerHTML = `<strong>${post.user}</strong> ${post.caption}`
  article.appendChild(caption)

  // comments
  const commentsList = document.createElement('ul')
  commentsList.className = 'comments'
  post.comments.forEach(c => {
    const li = document.createElement('li')
    li.className = 'comment'
    li.textContent = c
    commentsList.appendChild(li)
  })
  article.appendChild(commentsList)

  // comment form
  const form = document.createElement('form')
  form.className = 'comment-form'
  form.innerHTML = `
    <input type="text" name="comment" placeholder="Add a comment..." aria-label="Add a comment">
    <button type="submit">Post</button>
  `
  article.appendChild(form)

  // Events
  likeBtn.addEventListener('click', () => {
    post.liked = !post.liked
    if(post.liked){ post.likes += 1 } else { post.likes -= 1 }
    likeBtn.innerHTML = post.liked ? '❤' : '♡'
    likeBtn.classList.toggle('liked', post.liked)
    likeBtn.setAttribute('aria-pressed', String(post.liked))
    likeBtn.setAttribute('aria-label', post.liked ? 'Unlike post' : 'Like post')
    likeBtn.title = post.liked ? 'Unlike' : 'Like'
    likesCount.textContent = `${post.likes} ${post.likes === 1 ? 'like' : 'likes'}`
  })

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = form.querySelector('input[name="comment"]')
    const value = input.value.trim()
    if(!value) return
    post.comments.push(value)
    const li = document.createElement('li')
    li.className = 'comment'
    li.textContent = value
    commentsList.appendChild(li)
    input.value = ''
  })

  return article
}

function renderFeed(){
  feed.innerHTML = ''
  posts.forEach(p => {
    const el = createPostElement(p)
    feed.appendChild(el)
  })
}

renderFeed()

// Expose for debugging in console
window.__miniGram = { posts, renderFeed }
