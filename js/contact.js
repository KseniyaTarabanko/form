// Должно быть ТОЧНО так:
(function() {
    emailjs.init("aZHRiHj46zYYgMIVz");
})();

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Показываем "Отправка..."
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '<p>Отправка...</p>';
    
    emailjs.sendForm('service_jxizz17', 'template_64ngy3s', this)
        .then(function() {
            formMessage.innerHTML = '<p style="color:green">✅ Отправлено!</p>';
            document.getElementById('feedbackForm').reset();
        }, function(error) {
            formMessage.innerHTML = '<p style="color:red">❌ Ошибка: ' + error.text + '</p>';
            console.error('EmailJS error:', error);
        });
});