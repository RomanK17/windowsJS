import './slider';
import modals from './modules/modals';
import pageTabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
    modals();
    pageTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    pageTabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click')
});
