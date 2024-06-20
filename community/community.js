document.getElementById('post-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const content = document.getElementById('post-content').value;
    if (username && content) {
        addPost(username, content);
        document.getElementById('username').value = '';
        document.getElementById('post-content').value = '';
    }
});

function addPost(username, content) {
    const postsContainer = document.getElementById('posts-container');

    const postDiv = document.createElement('div');
    postDiv.className = 'post';

    const postUserDiv = document.createElement('div');
    postUserDiv.className = 'post-user';
    postUserDiv.textContent = username;

    const postContentDiv = document.createElement('div');
    postContentDiv.className = 'post-content';
    postContentDiv.textContent = content;

    const replyForm = document.createElement('form');
    replyForm.className = 'reply-form';
    replyForm.innerHTML = `
        <input type="text" class="reply-username" placeholder="Your Name" required>
        <textarea class="reply-content" placeholder="Write a reply..." required></textarea>
        <button type="submit" class="reply-button"><i class="bi bi-reply"></i> Reply</button>
    `;

    replyForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const replyUsername = replyForm.querySelector('.reply-username').value;
        const replyContent = replyForm.querySelector('.reply-content').value;
        if (replyUsername && replyContent) {
            addReply(replyForm, replyUsername, replyContent);
            replyForm.querySelector('.reply-username').value = '';
            replyForm.querySelector('.reply-content').value = '';
        }
    });

    postDiv.appendChild(postUserDiv);
    postDiv.appendChild(postContentDiv);
    postDiv.appendChild(replyForm);
    postsContainer.appendChild(postDiv);
}

function addReply(replyForm, username, content) {
    const replyDiv = document.createElement('div');
    replyDiv.className = 'reply';
    replyDiv.innerHTML = `<span class="post-user">${username}:</span> ${content}`;
    replyForm.insertAdjacentElement('beforebegin', replyDiv);
}

// Animation for background dots
const dotElements = document.querySelectorAll('.big_container div');
dotElements.forEach((dot, index) => {
    dot.style.animationDuration = `${Math.random() * (10 - 3) + 3}s`; // Random animation duration between 3 to 10 seconds
});