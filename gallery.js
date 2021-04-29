import gallery from "./gallery-items.js";

const galleryList = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");
const closemodal = document.querySelector(".lightbox__button");
const imgInModal = document.querySelector(".lightbox__image")
const makeGallery = createListItem(gallery);
galleryList.insertAdjacentHTML("beforeend", makeGallery);
galleryList.addEventListener("click", onPhotoClick);

function createListItem(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
    onclick="event.preventDefault()" 
  >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

function onPhotoClick(evt) {
  closemodal.addEventListener("click", closingmodal);

  const isPicture = evt.target.classList.contains("gallery__image");
  if (!isPicture) {
    return;
  }

  const bigPictureSrc = evt.target.dataset.source; 
  imgInModal.src = bigPictureSrc;
  imgInModal.alt = evt.target.alt;
  modal.classList.add("is-open");
}

function closingmodal() {
  modal.classList.remove("is-open");
  imgInModal.src = ' ';
  imgInModal.alt = ' ';
  }