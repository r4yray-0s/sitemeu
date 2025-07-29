const saveButton = document.getElementById('saveButton');
const saveStatus = document.getElementById('saveStatus');

let saved = false;

saveButton.addEventListener('click', () => {
    saved = !saved;
    saveButton.classList.toggle('saved', saved);
    saveStatus.textContent = saved ? 'Salvo!' : 'Não salvo';
});