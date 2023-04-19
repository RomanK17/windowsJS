const createForms = () => {
    const forms = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');
    const messageForUser = {
        loading: 'Загрузка',
        success: 'Отправлено',
        error: 'Ошибка!'
    };

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();


            let createMessage = document.createElement('div');
            createMessage.classList.add('status');
            form.appendChild(createMessage);

            const formData = new FormData;
        });
    });

    postData('assets/server.php')
};

export default createForms;