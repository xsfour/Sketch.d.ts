/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBlurInspectorViewController<T = any> extends cocoa.MSStylePartInspectorViewController, cocoa.MSStylePartInspectorItemDelegateProtocol, cocoa.NSMenuDelegateProtocol {
    layers<R = unknown>(): R;
    setStyleParts<R = void, P0 = unknown>(_setStyleParts: P0): R;
    blurKinds<R = unknown>(): R;
    items<R = unknown>(): R;
    prepareLayersForBackgroundBlur<R = void, P0 = unknown>(_prepareLayersForBackgroundBlur: P0): R;
    reloadInspectorStack<R = void, P0 = unknown>(_reloadInspectorStack: P0): R;
    paddingItem<R = cocoa.MSPaddingInspectorItem>(): R;
    setPaddingItem<R = void, P0 = cocoa.MSPaddingInspectorItem>(_v: P0): R;
    backgroundBlurItem<R = cocoa.MSBackgroundBlurInspectorItem>(): R;
    setBackgroundBlurItem<R = void, P0 = cocoa.MSBackgroundBlurInspectorItem>(_v: P0): R;
    zoomBlurItem<R = cocoa.MSZoomBlurInspectorItem>(): R;
    setZoomBlurItem<R = void, P0 = cocoa.MSZoomBlurInspectorItem>(_v: P0): R;
    motionBlurItem<R = cocoa.MSMotionBlurInspectorItem>(): R;
    setMotionBlurItem<R = void, P0 = cocoa.MSMotionBlurInspectorItem>(_v: P0): R;
    simpleBlurItem<R = cocoa.MSSimpleBlurInspectorItem>(): R;
    setSimpleBlurItem<R = void, P0 = cocoa.MSSimpleBlurInspectorItem>(_v: P0): R;
    blurNameItem<R = cocoa.MSBlurNameInspectorItem>(): R;
    setBlurNameItem<R = void, P0 = cocoa.MSBlurNameInspectorItem>(_v: P0): R;
    paddingView<R = cocoa.MSSeparatorlessView>(): R;
    setPaddingView<R = void, P0 = cocoa.MSSeparatorlessView>(_v: P0): R;
    multipleBlursMenuItem<R = cocoa.NSMenuItem>(): R;
    setMultipleBlursMenuItem<R = void, P0 = cocoa.NSMenuItem>(_v: P0): R;
    backgroundBlurMenuItem<R = cocoa.NSMenuItem>(): R;
    setBackgroundBlurMenuItem<R = void, P0 = cocoa.NSMenuItem>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSBlurInspectorViewController<T = any> extends cocoa.classes.MSStylePartInspectorViewController, cocoa.classes.MSStylePartInspectorItemDelegateProtocol, cocoa.classes.NSMenuDelegateProtocol {
      alloc<R = MSBlurInspectorViewController>(): R;
      new: <R = MSBlurInspectorViewController>() => R;
    }
  }
}

declare const MSBlurInspectorViewController: cocoa.classes.MSBlurInspectorViewController;
