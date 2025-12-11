// Инициализация EmailJS
(function() {
    emailjs.init("aZHRiHj46zYYgMIVz");
})();

// Обработка формы
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '<p>Отправка...</p>';
    
    // ВАЖНО: должно быть service_jxizzf7 с буквой f
    emailjs.sendForm('service_jxizzf7', 'template_64ngy3s', this)
        .then(function() {
            formMessage.innerHTML = '<p style="color:green">✅ Сообщение отправлено!</p>';
            document.getElementById('feedbackForm').reset();
        }, function(error) {
            formMessage.innerHTML = '<p style="color:red">❌ Ошибка: ' + error.text + '</p>';
            console.error('EmailJS error:', error);
        });
});