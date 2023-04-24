const creatingTabs = ({ headerSelector, tabsSelector, contentSelector, activeClass, display = 'block' }) => {
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
        tabContent[itemNumber].style.display = display;
        tabs[itemNumber].classList.add(activeClass);
    };

    const switchTabContent = (event) => {
        const target = event.target;
        const isValidTabsTarget = target?.parentNode.classList.contains(tabsSelector.replace(/\./, '')) || target?.classList.contains(tabsSelector.replace(/\./, ''));

        if (isValidTabsTarget) {
            tabs.forEach((tab, tabNumber) => {
                if (target == tab || target.parentNode == tab) {
                    hideTabContent();
                    showTabContent(tabNumber);
                }
            });
        }
    };

    header.addEventListener('click', switchTabContent)

    header.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            switchTabContent(event);
        }
    });

};

export default creatingTabs;