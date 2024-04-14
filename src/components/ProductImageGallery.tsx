import React, {Fragment} from 'react';
import {Image, View} from 'react-native';

interface Props {
  imageUrls: string[];
}

const ProductImageGallery = ({imageUrls}: Props) => {
  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <View testID="image-gallery">
      {imageUrls.map((url, index) => (
        <Fragment key={index}>
          <Image source={{uri: url}} testID="gallery-image-item" />
        </Fragment>
      ))}
    </View>
  );
};

export default ProductImageGallery;
