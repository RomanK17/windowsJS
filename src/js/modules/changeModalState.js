import checkNumInputs from '../modules/checkNumInputs';

const changeModalState = (state) => {
    const windowsTabs = document.querySelectorAll('.balcon_icons_img');
    const windowWidth = document.querySelectorAll('#width');
    const windowHeight = document.querySelectorAll('#height');
    const windowType = document.querySelectorAll('#view_type');
    const windowWarmOrCold = document.querySelectorAll('.checkbox');

    //funct for storing data in modalState from main.js
    const bindActionToElems = (event, elements, property) => {
        elements.forEach((elem, index) => {
            elem.addEventListener(event, () => {
                switch (elem.nodeName) {
                    case 'SPAN':
                        state[property] = index;
                        break;
                    case 'INPUT':
                        if (elem.type === 'checkbox') {
                            index === 0 ? state[property] = 'cold' : state[property] = 'warm';
                        } else {
                            state[property] = elem.value;
                        }
                        break;
                    case 'SELECT':
                        state[property] = elem.value;
                        break
                }
            });
        });
    };

    bindActionToElems('click', windowsTabs, 'form');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowWarmOrCold, 'temperature');

    //only numbers in unputs
    checkNumInputs('#width');
    checkNumInputs('#height');


};

export default changeModalState;