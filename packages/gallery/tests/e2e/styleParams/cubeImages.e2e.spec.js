import GalleryDriver from '../../drivers/pptrDriver';
import { toMatchImageSnapshot } from '../../drivers/matchers';

expect.extend({ toMatchImageSnapshot });

describe('cubeImages - e2e', () => {
  let driver;

  beforeAll(async () => {
    driver = new GalleryDriver();
    await driver.openPage();
  });

  afterAll(async () => {
    await driver.closePage();
  });

  it('should fit images inside the containers', async () => {
    await driver.navigate({
      galleryLayout: -1,
      cubeImages: true,
      cubeType: 'fit',
      layoutParams: {
        cropRatio: 1,
      },
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('#pro-gallery-container');
    expect(page).toMatchImageSnapshot();
  });
  it('should crop the images and fill the containers', async () => {
    await driver.navigate({
      galleryLayout: -1,
      cubeImages: true,
      cubeType: 'fill',
      layoutParams: {
        cropRatio: 1,
      },
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('#pro-gallery-container');
    expect(page).toMatchImageSnapshot();
  });
  it('should have a "cropRatio" of "2"', async () => {
    await driver.navigate({
      galleryLayout: -1,
      cubeImages: true,
      cubeType: 'fill',
      layoutParams: {
        cropRatio: 2,
      },
    });
    await driver.waitFor.hookToBeVisible('item-container');
    const page = await driver.grab.elemScreenshot('#pro-gallery-container');
    expect(page).toMatchImageSnapshot();
  });
});
