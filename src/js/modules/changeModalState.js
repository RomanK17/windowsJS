import checkNumInputs from '../modules/checkNumInputs';

const changeModalState = (state) => {
    const windowsTabs = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelector('#width');
    const windowHeight = document.querySelector('#height');
    const windowType = document.querySelector('#view_type');
    const windowWarmOrCold = document.querySelectorAll('.checkbox');

    windowsTabs.forEach((windowTab, index) => {
        windowTab.addEventListener('click', () => {
            state.form = index;
            console.log(state);
        });
    });

    checkNumInputs('#width');
    checkNumInputs('#height');


};

export default changeModalState;