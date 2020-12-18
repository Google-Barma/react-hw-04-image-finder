import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';

export default function ImageGallery({ galleryPhotos, onOpenModal }) {
  return (
    <ul className="ImageGallery">
      {galleryPhotos.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          key={id}
          previewUrl={webformatURL}
          imageUrl={largeImageURL}
          onClickImage={onOpenModal}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  onOpenModal: propTypes.func,
  galleryPhotos: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number,
      webformatURL: propTypes.string,
      largeImageURL: propTypes.string,
    }),
  ),
};
