'use strict';

const modals = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        function closeModal() {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        }

        function showModal() {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        trigger.forEach((btn) => {
            btn.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }

                showModal()
                // clearTimeout(modalTimer); вот здесь мб как-то использовать, чтобы очистить таймер и он не показывал окно еще раз, но из функции значении не знаю как передать в таймер
            });
        });

        close.addEventListener('click', () => {
            closeModal();
        });

        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.code === "Escape" && modal.style.display === 'block') {
                closeModal();
            }
        });

    }

    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }
    // проблема в том, что таймер вызывает независимо от того, вызывали ли мы уже модальное окно, а если помещать таймер в функцию bindModal, то он дважды вызывается.

    showModalByTime('.popup', 3000)

    //request engineer
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');

    //request for call back
    bindModal('.phone_link', '.popup', '.popup .popup_close');

};

export default modals;