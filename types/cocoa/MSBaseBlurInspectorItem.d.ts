/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseBlurInspectorItem<T = any> extends cocoa.MSStylePartInspectorItem, cocoa.MSInspectorMathValueAdaptorDelegateProtocol, cocoa.MSInspectorValueAdaptorDelegateProtocol {
    popUpMenuIndexFromBlurType<R = number, P0 = number>(_popUpMenuIndexFromBlurType: P0): R;
    blurTypeFromPopUpMenuIndex<R = number, P0 = number>(_blurTypeFromPopUpMenuIndex: P0): R;
    menuNeedsUpdate<R = void, P0 = unknown>(_menuNeedsUpdate: P0): R;
    blurPopUpAction<R = void, P0 = unknown>(_blurPopUpAction: P0): R;
    radiusAdapter<R = cocoa.MSMathInspectorValueAdaptor>(): R;
    setRadiusAdapter<R = void, P0 = cocoa.MSMathInspectorValueAdaptor>(_v: P0): R;
    multipleBlursMenuItem<R = cocoa.NSMenuItem>(): R;
    setMultipleBlursMenuItem<R = void, P0 = cocoa.NSMenuItem>(_v: P0): R;
    backgroundBlurMenuItem<R = cocoa.NSMenuItem>(): R;
    setBackgroundBlurMenuItem<R = void, P0 = cocoa.NSMenuItem>(_v: P0): R;
    blurPopUp<R = cocoa.NSPopUpButton>(): R;
    setBlurPopUp<R = void, P0 = cocoa.NSPopUpButton>(_v: P0): R;
    radiusSlider<R = cocoa.NSSlider>(): R;
    setRadiusSlider<R = void, P0 = cocoa.NSSlider>(_v: P0): R;
    radiusField<R = cocoa.MSUpDownTextField>(): R;
    setRadiusField<R = void, P0 = cocoa.MSUpDownTextField>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBaseBlurInspectorItem<T = any> extends cocoa.classes.MSStylePartInspectorItem, cocoa.classes.MSInspectorMathValueAdaptorDelegateProtocol, cocoa.classes.MSInspectorValueAdaptorDelegateProtocol {
      alloc<R = MSBaseBlurInspectorItem>(): R;
      new: <R = MSBaseBlurInspectorItem>() => R;
    }
  }
}

declare const MSBaseBlurInspectorItem: cocoa.classes.MSBaseBlurInspectorItem;
