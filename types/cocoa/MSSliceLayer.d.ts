/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSliceLayer<T = any> extends cocoa._MSSliceLayer, cocoa.MSLayerPreviewabilityProtocol, cocoa.MSLayerWithMutableBackgroundColorProtocol, cocoa.MSColorConvertibleProtocol {
    rootForNameUniquing<R = unknown>(): R;
    canRotate<R = boolean>(): R;
    canBeTransformed<R = boolean>(): R;
    setName<R = void, P0 = unknown>(_setName: P0): R;
    shouldDrawSelectionStroke<R = boolean>(): R;
    applyScreenPickerColor_preferredStyleName<R = void, P0 = unknown, P1 = unknown>(_applyScreenPickerColor: P0, _preferredStyleName: P1): R;
    isActive<R = boolean>(): R;
    filterTypeMask<R = number>(): R;
    canChangeBooleanOperation<R = boolean>(): R;
    interfaceImageIdentifier<R = unknown>(): R;
    cacheOwner<R = unknown>(): R;
    backgroundColor<R = cocoa.MSColor>(): R;
    setBackgroundColor<R = void, P0 = cocoa.MSColor>(_v: P0): R;
    badgeType<R = number>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hasBackgroundColor<R = boolean>(): R;
    setHasBackgroundColor<R = void, P0 = boolean>(_v: P0): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSSliceLayer<T = any> extends cocoa.classes._MSSliceLayer, cocoa.classes.MSLayerPreviewabilityProtocol, cocoa.classes.MSLayerWithMutableBackgroundColorProtocol, cocoa.classes.MSColorConvertibleProtocol {
      alloc<R = MSSliceLayer>(): R;
      new: <R = MSSliceLayer>() => R;
      sliceLayerFromLayer<R = unknown, P0 = unknown>(_sliceLayerFromLayer: P0): R;
    }
  }
}

declare const MSSliceLayer: cocoa.classes.MSSliceLayer;
