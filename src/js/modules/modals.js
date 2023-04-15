'use strict';

const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (event) => {
            if (event.target) {
                event.preventDefault();
            }

            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        });
    }
    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineerWindow = document.querySelector('.popup_engineer'),
        closeEngineerBtn = document.querySelector('.popup_engineer .popup_close');

    bindModal(callEngineerBtn, modalEngineerWindow, closeEngineerBtn);
};

export default modals;