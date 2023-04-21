import './slider';
import modals from './modules/modals';
import creatingTabs from './modules/tabs';

window.addEventListener('DOMContentLoaded', () => {
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
});
