import checkNumInputs from '../modules/checkNumInputs';

const createForms = (state) => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    const messageForUser = {
        loading: 'Отправка данных...',
        success: 'Спасибо! С вами скоро свяжутся',
        error: 'Ошибка!'
    };

    // only nmbrs in this input
    checkNumInputs('[name="user_phone"]');

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = messageForUser.loading;

        let result = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await result.text();
    };

    const clearInputs = () => {
        inputs.forEach((input) => input.value = '');
    };

    forms.forEach((form) => {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let messageDiv = document.createElement('div');
            messageDiv.classList.add('status');
            form.appendChild(messageDiv);

            const formData = new FormData(form);
            if (form.getAttribute('data-calc')) {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            let formDataObject = Object.fromEntries(formData.entries());

            postData('https://simple-server-cumz.onrender.com/api/data', formDataObject)
                .then(result => {
                    console.log(result);
                    messageDiv.innerHTML = messageForUser.success;
                })
                .catch(() => messageDiv.innerHTML = messageForUser.error)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        messageDiv.remove()
                    }, 30000);
                });
        });
    });
};

export default createForms;