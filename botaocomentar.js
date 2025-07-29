const commentButton = document.getElementById('commentButton');
const commentCount = document.getElementById('commentCount');
const commentBox = document.getElementById('commentBox');
const commentInput = document.getElementById('commentInput');
const sendComment = document.getElementById('sendComment');
let commented = false;
let count = 0;

commentButton.addEventListener('click', () => {
    commentBox.style.display = commentBox.style.display === 'none' ? 'flex' : 'none';
});

sendComment.addEventListener('click', () => {
    if (commentInput.value.trim() !== '') {
        commented = true;
        count++;
        commentCount.textContent = count;
        commentInput.value = '';
        commentBox.style.display = 'none';
        commentButton.classList.add('commented');
    }
});