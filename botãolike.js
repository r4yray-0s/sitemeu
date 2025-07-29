const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
const heart = document.getElementById('heart');
let liked = false;
let count = 0;

likeButton.addEventListener('click', () => {
    liked = !liked;
    likeButton.classList.toggle('liked', liked);
    count += liked ? 1 : -1;
    likeCount.textContent = count;
});