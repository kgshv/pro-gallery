import { INPUT_TYPES } from '../utils/constants';
import { default as GALLERY_CONSTS } from '../../common/constants';

export default {
  title: 'Text Box Width (pixels)',
  description: `Set the text box width when on the right side or on the left side.`,
  isRelevantDescription:
    'First set a Vertical gallery ("Scroll Direction" as "Vertical").\nThen set "Layout Orientation" to "Columns".\nThen set "Max Group Size" to "1".\nThen set "Texts Placement" to "Show on the Right" or "Show on the Left".\nThen set "Text Box Width Units" to "Manual".',
  isRelevant: (options) =>
    options.isVertical &&
    options.groupSize === 1 &&
    options.scrollDirection === GALLERY_CONSTS.scrollDirection.VERTICAL &&
    options.calculateTextBoxWidthMode ===
      GALLERY_CONSTS.textBoxWidthCalculationOptions.MANUAL &&
    GALLERY_CONSTS.hasExternalHorizontalPlacement(options.titlePlacement),
  type: INPUT_TYPES.NUMBER,
  default: 200,
  min: 0,
  max: 1000,
};
