document.getElementById('mars-once').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();
    
    if (!name || !number) {
        alert('Пожалуйста, заполните все поля.');
        return;
    }

    setTimeout(function() {
        alert('Заявка успешно отправлена!');
        window.location.href = 'zayavka.html';
    }, 500);
});