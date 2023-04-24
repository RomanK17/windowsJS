import './slider';
import modals from './modules/modals';
import creatingTabs from './modules/tabs';
import createForms from './modules/forms';
import changeModalState from './modules/changeModalState';
import createTimer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    let modalState = {};

    changeModalState(modalState);

    modals();

    creatingTabs(
        {
            headerSelector: '.glazing_slider',
            tabsSelector: '.glazing_block',
            contentSelector: '.glazing_content',
            activeClass: 'active'
        });
    creatingTabs(
        {
            headerSelector: '.decoration_slider',
            tabsSelector: '.no_click',
            contentSelector: '.decoration_content > div > div',
            activeClass: 'after_click'
        });

    //tabs in calc form
    creatingTabs({
        headerSelector: '.balcon_icons',
        tabsSelector: '.balcon_icons_img',
        contentSelector: '.big_img > img',
        activeClass: 'do_image_more',
        display: 'inline-block'
    });

    createForms(modalState);

    createTimer();
});
