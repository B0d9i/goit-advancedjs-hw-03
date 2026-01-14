import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
let lightbox = null;

export function createGallery(images) {
  if (!galleryContainer) {
    console.error('Gallery container not found');
    return;
  }

  const markup = images
    .map(
      image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}" class="gallery-link">
        <img
          src="${image.webformatURL}"
          alt="${image.tags}"
          class="gallery-image"
          loading="lazy"
        />
        <div class="gallery-info">
          <p class="info-item">
            <b>Likes</b>
            ${image.likes}
          </p>
          <p class="info-item">
            <b>Views</b>
            ${image.views}
          </p>
          <p class="info-item">
            <b>Comments</b>
            ${image.comments}
          </p>
          <p class="info-item">
            <b>Downloads</b>
            ${image.downloads}
          </p>
        </div>
      </a>
    </li>
  `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);


  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    lightbox.refresh();
  }
}

export function clearGallery() {
  if (galleryContainer) {
    galleryContainer.innerHTML = '';
  }
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('visible');
  }
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('visible');
  }
}

