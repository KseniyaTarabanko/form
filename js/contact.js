// Инициализация EmailJS с вашим ключом
(function() {
    emailjs.init("aZHRiHj46zYYgMIVz");
})();

// Обработка отправки формы
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку
    
    // Показываем сообщение об отправке
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = '<p style="color:#8b4513;">⏳ Отправляем ваше сообщение...</p>';
    
    // ПРАВИЛЬНЫЕ параметры (скопированы из вашего EmailJS):
    // Service ID: service_jxlzzl7
    // Template ID: template_64ngy3s
    emailjs.sendForm('service_jxlzzl7', 'template_64ngy3s', this)
        .then(function() {
            // Успешная отправка
            formMessage.innerHTML = '<p style="color:green;">✅ Сообщение отправлено! Мы скоро ответим.</p>';
            document.getElementById('feedbackForm').reset(); // Очищаем форму
        }, function(error) {
            // Ошибка отправки
            formMessage.innerHTML = '<p style="color:red;">❌ Ошибка: ' + error.text + '</p>';
            console.log('Ошибка EmailJS:', error);
        });
});