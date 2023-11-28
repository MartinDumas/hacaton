document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.stars input');
    const commentInput = document.getElementById('comment');
    const container = document.querySelector('.container');
    const resultMessage = document.createElement('div');
    const submitButton = document.getElementById('submitButton');

    resultMessage.id = 'floatingMessage';
    container.appendChild(resultMessage);

    stars.forEach(star => {
        star.addEventListener('change', function () {
            const ratingValue = this.value;
            showFloatingMessage(`Оцінка: ${ratingValue}`);
        });
    });

    submitButton.addEventListener('click', function () {
        const comment = commentInput.value.trim();
        if (comment !== '') {
            showFloatingMessage('Коментар надіслано');
        }
    });

    function showFloatingMessage(message) {
        resultMessage.innerHTML = message;
        resultMessage.style.opacity = '1';

        setTimeout(function () {
            resultMessage.style.opacity = '0';
        }, 2500); // Set the timeout for 2.5 seconds (adjust as needed)
    }
});
