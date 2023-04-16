const modals = () => {
    let modalTimer;

    const bindModal = (triggersSelector, modalSelector, closeSelector) => {

        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        const closeModal = () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'visible';
        }

        const showModal = () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (event) => {
                if (event.target) {
                    event.preventDefault();
                }
                showModal()
                clearTimeout(modalTimer);
            });
        });

        close.addEventListener('click', () => closeModal());

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

    const showModalByTime = (selector, time) => {
        modalTimer = setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = 'hidden';
        }, time);
    }

    // showModalByTime('.popup', 60000)

    //request engineer
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');

    //request for call back
    bindModal('.phone_link', '.popup', '.popup .popup_close');

};

export default modals;