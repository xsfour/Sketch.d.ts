/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTransparencyLayerSavedState<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    name<R = cocoa.NSString>(): R;
    setName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    shouldFlip<R = boolean>(): R;
    setShouldFlip<R = void, P0 = boolean>(_v: P0): R;
    deviceRect<R = cocoa.CGRect>(): R;
    setDeviceRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    contextRef<R = cocoa.CGContext>(): R;
    setContextRef<R = void, P0 = cocoa.CGContext>(_v: P0): R;
    graphicsContext<R = cocoa.NSGraphicsContext>(): R;
    setGraphicsContext<R = void, P0 = cocoa.NSGraphicsContext>(_v: P0): R;
  }
  namespace classes {
    export interface MSTransparencyLayerSavedState<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSTransparencyLayerSavedState>(): R;
      new: <R = MSTransparencyLayerSavedState>() => R;
    }
  }
}

declare const MSTransparencyLayerSavedState: cocoa.classes.MSTransparencyLayerSavedState;
