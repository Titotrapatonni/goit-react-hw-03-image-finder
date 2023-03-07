// import { Modal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
  onClick,
}) => {
  return (
    <li className="gallery-item" id={id} onClick={() => onClick(largeImageURL)}>
      <img src={webformatURL} alt="img" />
    </li>
  );
};
