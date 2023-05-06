import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const gallery = document.querySelector('.gallery');

const itemsGallery = galleryItems
  .map(
    galleryItem =>
      `<a class="gallery__link" href=${galleryItem.original}>
        <img class="gallery__image"
        src=${galleryItem.preview} 
        alt=${galleryItem.description}/>
        </a>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', itemsGallery);

var lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
});
lightbox.on('show.simplelightbox');
