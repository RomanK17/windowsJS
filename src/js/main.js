import './slider';
import modals from './modules/modals';
import creatingTabs from './modules/tabs';
import createForms from './modules/forms';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    createForms();
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
});
