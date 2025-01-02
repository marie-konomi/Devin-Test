document.getElementById('post-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    if (title && content) {
        const postSection = document.getElementById('blog-posts');
        const post = document.createElement('article');
        post.innerHTML = `<h2>${title}</h2><p>${content}</p>`;
        postSection.appendChild(post);
        document.getElementById('post-form').reset();
    }
});