const pageTabs = (headerSelector, tabsSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tabs = document.querySelectorAll(tabsSelector);
    const tabContent = document.querySelectorAll(contentSelector);

    const hideTabContent = () => {
        tabContent.forEach((content) => {
            content.style.display = 'none';
        });

        tabs.forEach((tab) => {
            tab.classList.remove(activeClass);
        });
    };

    const showTabContent = (itemNumber = 0) => {
        tabContent[itemNumber].style.display = 'block';
        tabs[itemNumber].classList.add(activeClass);
    };

    hideTabContent();
    showTabContent();
    // можешь пояснить, зачем нужно заранее вызывать эти две функции? в видео особо не объясняется, я бы их убрал.

    header.addEventListener('click', (event) => {
        const target = event.target;
        if (target) {
            if (target.classList.contains(tabsSelector.replace(/\./, '')) ||
                target.parentNode.classList.contains(tabsSelector.replace(/\./, ''))) {

                tabs.forEach((tab, tabNumber) => {
                    if (target == tab || target.parentNode == tab) {
                        hideTabContent();
                        showTabContent(tabNumber);
                    }
                });
            }
        }
    });
};

export default pageTabs;