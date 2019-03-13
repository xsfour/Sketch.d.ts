/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSOverlayBackgroundView<T = any> extends NSView {
    cxx_destruct<R = void>(): R;
    _cuiOptionsForCurrentMaterial<R = unknown>(): R;
    setPressed<R = void, P0 = boolean>(_setPressed: P0): R;
    _updateMaterialForState<R = void>(): R;
    wantsLayer<R = boolean>(): R;
    paletteScaleFactor<R = number>(): R;
    setPaletteScaleFactor<R = void, P0 = number>(_v: P0): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    debugMode<R = boolean>(): R;
    setDebugMode<R = void, P0 = boolean>(_v: P0): R;
    darkened<R = boolean>(): R;
    setDarkened<R = void, P0 = boolean>(_v: P0): R;
    backgroundScaleFactor<R = number>(): R;
    setBackgroundScaleFactor<R = void, P0 = number>(_v: P0): R;
    backgroundImageRef<R = unknown>(): R;
    setBackgroundImageRef<R = void, P0 = unknown>(_v: P0): R;
    isActive<R = boolean>(): R;
    setIsActive<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSOverlayBackgroundView<T = any> extends NSView {
      alloc<R = _NSOverlayBackgroundView>(): R;
      new: <R = _NSOverlayBackgroundView>() => R;
    }
  }
}
