const openImageModal = () => {
    const imagesContainer = document.querySelector('.works');
    const modalImage = document.createElement('div');
    const bigImage = document.createElement('img');
    const allBigImages = document.querySelectorAll('[data-image]');

    //creating modal for big image
    modalImage.classList.add('popup');
    imagesContainer.appendChild(modalImage);
    modalImage.style.justifyContent = 'center';
    modalImage.style.alignItems = 'center';
    modalImage.style.display = 'none';
    modalImage.appendChild(bigImage);
    bigImage.classList.add('bigImg');

    const showModalImage = () => {
        modalImage.style.display = 'flex';
        document.body.style.overflow = 'hidden';
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
            bigImage.setAttribute('src', pathBigImg);
            showModalImage();
        }
    });

    modalImage.addEventListener('click', (event) => {
        closeModalImage(event);
    });

    //for arrows
    let counter = 0;
    const getImageUrl = (counter) => {
        const imageUrl = allBigImages[counter].getAttribute('href');
        bigImage.setAttribute('src', imageUrl);
    }

    imagesContainer.addEventListener('keydown', (event) => {
        switch (event.code) {
            case 'Enter':
                if (event.target.closest('.works')) {
                    const pathBigImg = event.target.getAttribute('href');
                    bigImage.setAttribute('src', pathBigImg);
                    showModalImage();
                }
                break;

            case 'Escape':
                closeModalImage();
                break;

            case 'ArrowLeft':
                counter--;
                if (counter < 0) {
                    counter = allBigImages.length - 1;
                }
                getImageUrl(counter);
                break;
            case 'ArrowRight':
                counter++;
                if (counter >= allBigImages.length) {
                    counter = 0;
                }
                getImageUrl(counter);
                break;
        }
    });

};

export default openImageModal;