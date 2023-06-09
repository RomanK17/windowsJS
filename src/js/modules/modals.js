const modals = () => {
    let modalTimer;

    const bindModal = ({ triggersSelector, modalTrigger, modalSelector, closeSelector, closeClickOverlay = true }) => {

        const triggers = document.querySelectorAll(triggersSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        const allModals = document.querySelectorAll('[data-modal]');
        const focusTrigger = document.querySelector(modalTrigger);
        const scroll = calcScroll();

        const closeAllModals = () => {
            allModals.forEach((modalWindow) => {
                modalWindow.style.display = 'none';
            });
        };

        const closeModal = () => {
            modal.style.display = 'none';
            closeAllModals();
            document.body.style.overflow = 'visible';
            focusTrigger.focus();
            document.body.style.marginRight = `0px`;
        }

        const showModal = () => {
            modal.style.display = 'block';
            close.focus();
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${scroll}px`;
        }

        function calcScroll() {
            let div = document.createElement('div');

            div.style.width = '50px';
            div.style.height = '50px';
            div.style.overflowY = 'scroll';
            div.style.visibility = 'hidden';

            document.body.appendChild(div);
            let scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();

            return scrollWidth;
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
            if (event.target === modal && closeClickOverlay) {
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
    bindModal({
        triggersSelector: '.popup_engineer_btn',
        modalTrigger: '.popup_engineer_btn',
        modalSelector: '.popup_engineer',
        closeSelector: '.popup_engineer .popup_close'
    });

    //request for call back
    bindModal({
        triggersSelector: '.phone_link',
        modalTrigger: '.phone_link',
        modalSelector: '.popup',
        closeSelector: '.popup .popup_close'
    });

    //show calc form
    bindModal({
        triggersSelector: '.popup_calc_btn',
        modalTrigger: '.popup_calc_btn',
        modalSelector: '.popup_calc',
        closeSelector: '.popup_calc_close',
        closeClickOverlay: false
    });

    //show after calc form
    bindModal({
        triggersSelector: '.popup_calc_button',
        modalTrigger: '.popup_calc_button',
        modalSelector: '.popup_calc_profile',
        closeSelector: '.popup_calc_profile_close',
        closeClickOverlay: false
    });

    // show last calc form
    bindModal({
        triggersSelector: '.popup_calc_profile_button',
        modalTrigger: '.popup_calc_profile_button',
        modalSelector: '.popup_calc_end ',
        closeSelector: '.popup_calc_end_close',
        closeClickOverlay: false
    });

};

export default modals;