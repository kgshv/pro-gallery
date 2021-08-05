import React from 'react';
import { GALLERY_CONSTS, isEditMode, utils } from 'pro-gallery-lib';
import { GalleryComponent } from '../galleryComponent';

export default class ItemHover extends GalleryComponent {
  getHoverClass() {
    const { styleParams, forceShowHover } = this.props;
    const hoverClass = ['gallery-item-hover'];

    hoverClass.push(
      'fullscreen-' + (styleParams.fullscreen ? 'enabled' : 'disabled')
    );

    if (utils.isUndefined(styleParams.itemOpacity)) {
      //if gallery was just added to the page, and it's settings were never opened,
      //the styles of opacity and background were not set (are undefined),
      //so we are using the default background & opacity (is scss under .gallery-item-hover.default)
      hoverClass.push('default');
    }

    if (forceShowHover) {
      //in mobile, when item is hovered (tapped, with all the right configurations), forceShowHover is true
      hoverClass.push('force-hover');
    } else if (utils.isMobile()) {
      hoverClass.push('hide-hover');
    }

    return hoverClass.join(' ');
  }

  shouldRenderHoverInnerIfExist() {
    const { itemWasHovered, styleParams } = this.props;
    const {
      hoveringBehaviour,
      overlayAnimation,
      alwaysShowHover,
      previewHover,
    } = styleParams;
    const { APPEARS } = GALLERY_CONSTS.infoBehaviourOnHover;
    const { NO_EFFECT } = GALLERY_CONSTS.overlayAnimations;

    if (alwaysShowHover) {
      return true;
    }
    if (isEditMode() && previewHover) {
      return true;
    }
    if (hoveringBehaviour === APPEARS && overlayAnimation !== NO_EFFECT) {
      //when there is a specific overlayAnimation, to support the animation we render the itemHover before any hover activity (see 'shouldHover()' in itemView).
      //so in this specific case, the itemHover exists right away, but we do'nt want to render yet the hover-inner,
      //the hover-inner will be rendered only after (at) the first hover an on, and not before.
      return itemWasHovered;
    }
    return true;
  }

  getOverlayStyle() {
    const { styleParams, imageDimensions } = this.props;
    let {
      overlayPosition,
      overlaySize: requiredOverlaySize,
      overlaySizeType,
      overlayPadding,
    } = styleParams;
    let { width, height } = imageDimensions;
    let style = {};
    let margin = overlayPadding;

    const isHorizontal =
      overlayPosition === GALLERY_CONSTS.overlayPositions.LEFT ||
      overlayPosition === GALLERY_CONSTS.overlayPositions.RIGHT ||
      overlayPosition === GALLERY_CONSTS.overlayPositions.CENTERED_HORIZONTALLY;
    let overlayHeight, overlayWidth, overlaySize;
    if (isHorizontal) {
      width += -2 * overlayPadding;
      overlaySize = Math.min(
        width,
        overlaySizeType === 'PERCENT'
          ? width * (requiredOverlaySize / 100)
          : requiredOverlaySize
      );
      overlaySize = Math.max(0, overlaySize);
      overlayWidth = overlaySize;
      overlayHeight = height - 2 * overlayPadding;
    } else {
      height += -2 * overlayPadding;
      overlaySize = Math.min(
        height,
        overlaySizeType === 'PERCENT'
          ? height * (requiredOverlaySize / 100)
          : requiredOverlaySize
      );
      overlaySize = Math.max(0, overlaySize);
      overlayHeight = overlaySize;
      overlayWidth = width - 2 * overlayPadding;
    }
    console.log(overlaySize);
    // switch (overlayPosition) {
    //   case GALLERY_CONSTS.overlayPositions.RIGHT:
    //     // marginLeft += width - overlayWidth;
    //     break;
    //   case GALLERY_CONSTS.overlayPositions.CENTERED_HORIZONTALLY:
    //     // marginLeft += width / 2 - overlayWidth / 2;
    //     break;
    //   case GALLERY_CONSTS.overlayPositions.BOTTOM:
    //     // marginTop += height - overlayHeight;
    //     break;
    //   case GALLERY_CONSTS.overlayPositions.CENTERED_VERTICALLY:
    //     // marginTop += height / 2 - overlayHeight / 2;
    //     break;
    // }
    style = {
      width: overlayWidth,
      height: overlayHeight,
      margin,
      position: 'relative',
    };
    return style;
  }

  getStyleByFlex() {
    const { styleParams } = this.props;
    const { overlayPosition } = styleParams;
    let style = {
      width: '100%',
      height: '100%',
      display: 'flex',
    };
    switch (overlayPosition) {
      case GALLERY_CONSTS.overlayPositions.RIGHT:
        style = {
          ...style,
          justifyContent: 'flex-end',
        };
        break;
      case GALLERY_CONSTS.overlayPositions.BOTTOM:
        style = {
          ...style,
          alignItems: 'flex-end',
        };
        break;
      case GALLERY_CONSTS.overlayPositions.CENTERED_HORIZONTALLY:
        style = {
          ...style,
          justifyContent: 'center',
        };
        break;
      case GALLERY_CONSTS.overlayPositions.CENTERED_VERTICALLY:
        style = {
          ...style,
          alignItems: 'center',
        };
        break;
    }
    return style;
  }

  render() {
    const { actions, idx, renderCustomInfo } = this.props;
    const hoverClass = this.getHoverClass();
    const overlayStyle = this.getOverlayStyle();
    const styleByFlex = this.getStyleByFlex();
    return (
      <div
        key={'item-hover-' + idx}
        data-hook={'item-hover-' + idx}
        aria-hidden={true}
        style={styleByFlex}
        // style={overlayStyle}
      >
        <div
          className={hoverClass}
          // style={{ height: '100%' }}
          onTouchStart={actions.handleItemMouseDown}
          onTouchEnd={actions.handleItemMouseUp}
          style={overlayStyle}
        >
          {this.shouldRenderHoverInnerIfExist() && renderCustomInfo ? (
            <div className="gallery-item-hover-inner">{renderCustomInfo()}</div>
          ) : null}
        </div>
      </div>
    );
  }
}
