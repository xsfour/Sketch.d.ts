/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetButtonCell<T = any> extends cocoa.MSInspectorButtonCell {
    drawSecondaryTitleWithFrame_inView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_drawSecondaryTitleWithFrame: P0, _inView: P1): R;
    drawMainTitleWithFrame_inView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_drawMainTitleWithFrame: P0, _inView: P1): R;
    secondaryTitleRectWithFrame_inView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_secondaryTitleRectWithFrame: P0, _inView: P1): R;
    mainTitleRectWithFrame_inView<R = cocoa.CGRect, P0 = cocoa.CGRect, P1 = unknown>(_mainTitleRectWithFrame: P0, _inView: P1): R;
    arrowImage<R = unknown>(): R;
    arrowRectForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_arrowRectForBounds: P0): R;
    isHighlighted<R = boolean>(): R;
  }
  namespace classes {
    export interface MSArtboardPresetButtonCell<T = any> extends cocoa.classes.MSInspectorButtonCell {
      alloc<R = MSArtboardPresetButtonCell>(): R;
      new: <R = MSArtboardPresetButtonCell>() => R;
    }
  }
}

declare const MSArtboardPresetButtonCell: cocoa.classes.MSArtboardPresetButtonCell;
