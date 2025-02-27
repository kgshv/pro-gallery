import { GALLERY_CONSTS } from 'pro-gallery-lib';
import GalleryDriver from '../drivers/reactDriver';
import { expect } from 'chai';
import { mergeNestedObjects } from 'pro-gallery-lib';
import { images2 } from '../drivers/mocks/items';
import { options, container } from '../drivers/mocks/styles';

describe('options - enableScroll', () => {
  let driver;
  let initialProps;
  beforeEach(() => {
    driver = new GalleryDriver();
    initialProps = {
      container,
      items: images2,
      options,
    };
  });

  it('should set class "slider" when "enableScroll" is "true"', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.EMPTY,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL,
      enableScroll: true,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const galleryContainer = driver.find.selector('#pro-gallery-container');
    expect(galleryContainer.hasClass('slider')).to.be.true;
    driver.detach.proGallery();
  });
  it('should not set class "slider" when "enableScroll" is "false"', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.EMPTY,
      scrollDirection: GALLERY_CONSTS.scrollDirection.HORIZONTAL,
      enableScroll: false,
    });

    driver.mount.proGallery(initialProps);
    await driver.update();
    const galleryContainer = driver.find.selector('#pro-gallery-container');
    expect(galleryContainer.hasClass('slider')).to.be.false;
    driver.detach.proGallery();
  });
});
