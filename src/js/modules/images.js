const openImageModal = () => {
    const imagesContainer = document.querySelector('.works');
    const allImages = imagesContainer.querySelectorAll('.preview');
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

    // set tabindex for images and links
    allImages.forEach((item) => {
        item.setAttribute('tabindex', 0);

        const link = item.parentNode;
        if (link && link.tagName === 'A') {
            link.setAttribute('tabindex', -1);
        }
    });

    const showModalImage = (event) => {
        modalImage.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        const pathBigImg = event.target.parentNode.getAttribute('href');
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
            showModalImage(event);
        }
    });

    imagesContainer.addEventListener('keydown', (event) => {
        if (event.code === 'Enter' && event.target.classList.contains('preview')) {
            showModalImage(event);
        }
    });

    modalImage.addEventListener('click', closeModalImage);

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') closeModalImage();
    });
};

export default openImageModal;