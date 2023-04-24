const checkNumInputs = (selector) => {
    const inputsOnlyNum = document.querySelectorAll(selector);

    inputsOnlyNum.forEach((inputOnlyNum) => {
        inputOnlyNum.addEventListener('input', () => {
            inputOnlyNum.value = inputOnlyNum.value.replace(/\D/, '');
        });
    });
};

//also add this funct to forms after merge
export default checkNumInputs;