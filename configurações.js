const settingsForm = document.getElementById('settingsForm');
const settingsMessage = document.getElementById('settingsMessage');
const darkMode = document.getElementById('darkMode');

settingsForm.addEventListener('submit', function(e) {
    e.preventDefault();
    settingsMessage.textContent = "Configurações salvas!";
    setTimeout(() => settingsMessage.textContent = "", 2000);
});

const changePasswordBtn = document.getElementById('changePasswordBtn');