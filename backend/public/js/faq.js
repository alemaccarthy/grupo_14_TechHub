/// FUNCION PARA MANIPULAR LA MANERA DE MOSTRAR Y OCULTAR PREGUNTAS FRECUENTES Y RESPUESTAS
document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isOpen = question.classList.contains('active');

            questions.forEach(q => {
                q.nextElementSibling.classList.remove('show');
                q.classList.remove('active');
            });

            if (!isOpen) {
                answer.classList.add('show');
                question.classList.add('active');
            }
        });

        question.addEventListener('mouseenter', () => {
            question.classList.add('underline');
        });

        question.addEventListener('mouseleave', () => {
            question.classList.remove('underline');
        });
    });
});