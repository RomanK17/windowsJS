const checkNumInputs = (selector) => {
    const inputsOnlyNum = document.querySelectorAll(selector);

    inputsOnlyNum.forEach((inputOnlyNum) => {
        inputOnlyNum.addEventListener('input', () => {
            inputOnlyNum.value = inputOnlyNum.value.replace(/\D/, '');
        });
    });
};
export default checkNumInputs;