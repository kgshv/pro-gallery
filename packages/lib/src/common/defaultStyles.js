import GALLERY_CONSTS from './constants';
import coreStyles from './coreStyles';
import { mergeNestedObjects } from '../core/helpers/stylesUtils';

const defaultStyles = mergeNestedObjects(coreStyles, {
  layoutParams: {
    repeatingGroupTypes: '',
    itemSpacing: 10,
  },
  gallerySize: 30,
  cropOnlyFill: false,
  rotatingCropRatios: '',
  columnWidths: '',
  numberOfImagesPerCol: 1,
  groupsPerStrip: 0,
  scatter: 0,
  rotatingScatter: '',
  placeGroupsLtr: false,
  oneRow: false,
  enableInfiniteScroll: true,
  thumbnailSpacings: 4,
  enableScroll: true,
  isGrid: false,
  isSlider: false,
  isColumns: false,
  isMasonry: false,
  scrollSnap: false,
  itemClick: GALLERY_CONSTS.itemClick.NOTHING,
  slideAnimation: GALLERY_CONSTS.slideAnimations.SCROLL,
  scrollDuration: 400,
  arrowsPosition: GALLERY_CONSTS.arrowsPosition.ON_GALLERY,
  arrowsVerticalPosition: GALLERY_CONSTS.arrowsVerticalPosition.ITEM_CENTER,
  arrowsPadding: 23,
  thumbnailSize: 120,
  magicLayoutSeed: 1,
  imagePlacementAnimation: GALLERY_CONSTS.imagePlacementAnimations.NO_EFFECT,
  calculateTextBoxWidthMode:
    GALLERY_CONSTS.textBoxWidthCalculationOptions.PERCENT,
  textBoxWidth: 200,
  textBoxWidthPercent: 50,
  loadMoreButtonText: '',
  videoSpeed: '1',
  showVideoControls: false,
  shouldIndexDirectShareLinkInSEO: true,
  slideTransition: GALLERY_CONSTS.slideTransition.ease,
  useMaxDimensions: false,
  enableVideoPlaceholder: true,
  overlayPosition: GALLERY_CONSTS.overlayPositions.LEFT,
  overlaySize: 100,
  overlaySizeType: GALLERY_CONSTS.overlaySizeType.PERCENT,
  overlayPadding: 0,
});

export default defaultStyles;
