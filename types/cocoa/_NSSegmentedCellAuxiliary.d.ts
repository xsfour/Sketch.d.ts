/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSegmentedCellAuxiliary<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    compressibleOptions<R = cocoa.NSUserInterfaceCompressionOptions>(): R;
    setCompressibleOptions<R = void, P0 = cocoa.NSUserInterfaceCompressionOptions>(_v: P0): R;
    segmentDistribution<R = number>(): R;
    setSegmentDistribution<R = void, P0 = number>(_v: P0): R;
    inTouchBar<R = boolean>(): R;
    setInTouchBar<R = void, P0 = boolean>(_v: P0): R;
    gasPedalDoubleValue<R = number>(): R;
    setGasPedalDoubleValue<R = void, P0 = number>(_v: P0): R;
    lastGasPedalActionWasHighlighted<R = boolean>(): R;
    setLastGasPedalActionWasHighlighted<R = void, P0 = boolean>(_v: P0): R;
    sendActionOnGasPedal<R = boolean>(): R;
    setSendActionOnGasPedal<R = void, P0 = boolean>(_v: P0): R;
    menuTimer<R = cocoa.NSTimer>(): R;
    setMenuTimer<R = void, P0 = cocoa.NSTimer>(_v: P0): R;
    sendSelectionAction<R = boolean>(): R;
    setSendSelectionAction<R = void, P0 = boolean>(_v: P0): R;
    highlightedSegment<R = number>(): R;
    setHighlightedSegment<R = void, P0 = number>(_v: P0): R;
    segmentTrackingRects<R = cocoa.CGRect>(): R;
    setSegmentTrackingRects<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    segmentFrameOfTrackedCell<R = cocoa.CGRect>(): R;
    setSegmentFrameOfTrackedCell<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    segmentTrackingRectCount<R = number>(): R;
    setSegmentTrackingRectCount<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSSegmentedCellAuxiliary<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSSegmentedCellAuxiliary>(): R;
      new: <R = _NSSegmentedCellAuxiliary>() => R;
    }
  }
}
