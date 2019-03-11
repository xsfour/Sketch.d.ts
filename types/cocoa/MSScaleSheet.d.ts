/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSScaleSheet<T = any> extends cocoa.MSCanvasUpdatingSheet {
    selectScalingOrigin<R = void, P0 = unknown>(_selectScalingOrigin: P0): R;
    refreshScalingOriginButton<R = void, P0 = unknown>(_refreshScalingOriginButton: P0): R;
    refreshScalingOriginControls<R = void>(): R;
    didChangeValues<R = void>(): R;
    willChangeValues<R = void>(): R;
    setNilValueForKey<R = void, P0 = unknown>(_setNilValueForKey: P0): R;
    originLabel<R = cocoa.NSTextField>(): R;
    setOriginLabel<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    originButtonsContainer<R = cocoa.NSView>(): R;
    setOriginButtonsContainer<R = void, P0 = cocoa.NSView>(_v: P0): R;
    scalingOriginCorner<R = number>(): R;
    setScalingOriginCorner<R = void, P0 = number>(_v: P0): R;
    labelField<R = cocoa.NSTextField>(): R;
    setLabelField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    heightField<R = cocoa.NSTextField>(): R;
    setHeightField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    widthField<R = cocoa.NSTextField>(): R;
    setWidthField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    scalingField<R = cocoa.NSTextField>(): R;
    setScalingField<R = void, P0 = cocoa.NSTextField>(_v: P0): R;
    originalRect<R = cocoa.CGRect>(): R;
    scale<R = number>(): R;
    setScale<R = void, P0 = number>(_v: P0): R;
    height<R = number>(): R;
    setHeight<R = void, P0 = number>(_v: P0): R;
    width<R = number>(): R;
    setWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface MSScaleSheet<T = any> extends cocoa.classes.MSCanvasUpdatingSheet {
      alloc<R = MSScaleSheet>(): R;
      new: <R = MSScaleSheet>() => R;
    }
  }
}

declare const MSScaleSheet: cocoa.classes.MSScaleSheet;
