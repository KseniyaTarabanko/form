// Инициализация EmailJS
(function() {
    emailjs.init("aZHRiHj46zYYgMIVz");
})();

// Обработка формы
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const formMessage = document.getElementById('formMessage');
            formMessage.innerHTML = '<p>Отправляем...</p>';
            
            emailjs.sendForm('service_jxizz17', 'template_64ngy3s', this)
                .then(function() {
                    formMessage.innerHTML = '<p style="color:green">✅ Отправлено!</p>';
                    form.reset();
                }, function(error) {
                    formMessage.innerHTML = '<p style="color:red">❌ Ошибка</p>';
                });
        });
    }
});