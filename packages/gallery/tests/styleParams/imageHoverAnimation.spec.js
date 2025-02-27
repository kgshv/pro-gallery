import { GALLERY_CONSTS } from 'pro-gallery-lib';
import GalleryDriver from '../drivers/reactDriver';
import { expect } from 'chai';
import { mergeNestedObjects } from 'pro-gallery-lib';
import { images2 } from '../drivers/mocks/items';
import { options, container } from '../drivers/mocks/styles';

describe('options - imageHoverAnimation', () => {
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

  it('should have "Zoom in" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.ZOOM_IN,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.zoom-in-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
  it('should have "Blur" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.BLUR,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.blur-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
  it('should have "Greyscale" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.GRAYSCALE,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.grayscale-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
  it('should have "Shrink" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.SHRINK,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.shrink-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
  it('should have "invert" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.INVERT,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.invert-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
  it('should have "Color in" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.COLOR_IN,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.color-in-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
  it('should have "Darkened" animation on items', async () => {
    initialProps.options = mergeNestedObjects(initialProps.options, {
      galleryLayout: GALLERY_CONSTS.layout.GRID,
      imageHoverAnimation: GALLERY_CONSTS.imageHoverAnimations.DARKENED,
    });
    driver.mount.proGallery(initialProps);
    await driver.update();
    const animatedItems = driver.find.selector('.darkened-on-hover').at(0);
    expect(animatedItems.length).to.be.greaterThan(0);
    driver.detach.proGallery();
  });
});
