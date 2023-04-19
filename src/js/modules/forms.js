// нужно запустить сервер и проверить приходят ли запросы с сайта(скачать локальный сервер MAMP - нужно чтобы поддерживал post запросы) и добавить переменную в файл с путем к папке - 23.30 минута

const createForms = () => {
    const forms = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const phoneInputs = document.querySelectorAll('[name="user_phone"]');

    // можно добавить картинки загрузки вместо текста - посмотреть в папке \Users\roman\Documents\prog\windowsJS\src\assets\slick
    const messageForUser = {
        loading: 'Загрузка...',
        success: 'Спасибо! С вами скоро свяжутся',
        error: 'Ошибка!'
    };

    phoneInputs.forEach((phoneInput) => {
        phoneInput.addEventListener('input', () => {
            phoneInput.value = phoneInput.value.replace(/\D/, '');
        });
    });
    // /\D/ - инвертирующий класс, все нецифры

    const postData = async (url, data) => {
        document.querySelector('.status').innerHTML = messageForUser.loading;
        // fetch api возращает нам promise - посмотреть что это, поэтому мы прячем это все в переменную result 
        let result = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await result.text();
        // это скорее всего возвращает нам в консоль переменную result 
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
            //получение данных через submit
            //собираем данные для запроса на сервер
            const formData = new FormData(form);
            // это формат FormData, есть еще формат JSON
            //отправка запроса на сервер с fetch api 
            // проверить правильный ли путь к беку
            postData('assets/server.php', formData)
                //здесь уже возвращается promise
                .then(result => {
                    //тут у нас уже результат функции postData в текстовом формате
                    console.log(result);
                    messageDiv.innerHTML = messageForUser.success;
                })
                .catch(() => messageDiv.innerHTML = messageForUser.error)
                //это обработка ошибки - проверить работает ли
                .finally(() => {
                    //выполнится в любом случае
                    clearInputs();
                    setTimeout(() => {
                        messageForUser.remove()
                    }, 30000);
                    //нам надо чтобы инпуты почистились в любом случае+ пропало сообщение юзеру
                });
        });
    });
};

export default createForms;