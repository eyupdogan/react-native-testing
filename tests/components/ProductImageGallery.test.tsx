import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ProductImageGallery from '../../src/components/ProductImageGallery';

describe('ProductImageGallery', () => {
  it('should render null when imageUrls array is empty', () => {
    const {queryByTestId} = render(<ProductImageGallery imageUrls={[]} />);
    expect(queryByTestId('image-gallery')).toBeNull();
  });

  it('should render a list of images', () => {
    const imageUrls = ['url1', 'url2'];
    render(<ProductImageGallery imageUrls={imageUrls} />);

    const images = screen.getAllByTestId('gallery-image-item');
    expect(images.length).toBe(imageUrls.length);

    imageUrls.forEach((imageUrl, index) => {
      expect(images[index]).toHaveProp('source', {uri: imageUrl});
    });
  });
});
