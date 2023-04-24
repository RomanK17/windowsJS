const openImageModal = () => {
    const modalImage = document.createElement('div');
    const imagesContainer = document.querySelector('.works');
    const bigImage = document.createElement('img');

    modalImage.classList.add('popup');
    imagesContainer.appendChild(modalImage);
    modalImage.style.justifyContent = 'center';
    modalImage.style.alignItems = 'center';
    modalImage.style.display = 'none';
    modalImage.appendChild(bigImage);

    imagesContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target;

        if (target && target.classList.contains('preview')) {
            modalImage.style.display = 'flex';
            const pathBigImg = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', pathBigImg);
        }
    });
};

export default openImageModal;