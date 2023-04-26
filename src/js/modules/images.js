const openImageModal = () => {
    const imagesContainer = document.querySelector('.works');
    const modalImage = document.createElement('div');
    const bigImage = document.createElement('img');

    //creating modal for big image
    modalImage.classList.add('popup');
    imagesContainer.appendChild(modalImage);
    modalImage.style.justifyContent = 'center';
    modalImage.style.alignItems = 'center';
    modalImage.style.display = 'none';
    modalImage.appendChild(bigImage);
    bigImage.classList.add('bigImg');

    const showModalImage = (pathBigImg) => {
        modalImage.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        bigImage.setAttribute('src', pathBigImg);
    };

    const closeModalImage = () => {
        modalImage.style.display = 'none';
        document.body.style.overflow = 'visible';
    };

    imagesContainer.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.closest('.preview');

        if (target) {
            const pathBigImg = event.target.parentNode.getAttribute('href');
            showModalImage(pathBigImg);
        }
    });

    imagesContainer.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' && event.target.closest('.works')) {
            const pathBigImg = event.target.getAttribute('href');
            showModalImage(pathBigImg);
        }
    });

    modalImage.addEventListener('click', (event) => {
        closeModalImage(event);
    });

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') closeModalImage();
    });
};

export default openImageModal;