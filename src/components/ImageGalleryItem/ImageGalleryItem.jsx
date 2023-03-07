// import { Modal } from 'components/Modal/Modal';

import { Image, Item } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  image: { id, webformatURL, largeImageURL },
  onClick,
}) => {
  return (
    <Item
      className="gallery-item"
      id={id}
      onClick={() => onClick(largeImageURL)}
    >
      <Image src={webformatURL} alt="img" />
    </Item>
  );
};
