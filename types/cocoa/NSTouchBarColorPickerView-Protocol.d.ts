/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerViewProtocol<T = any> extends NSObjectProtocol {
    showMostRecentSavedColor<R = void>(): R;
    action<R = string>(): R;
    setAction<R = void, P0 = string>(_v: P0): R;
    target<R = unknown>(): R;
    setTarget<R = void, P0 = unknown>(_v: P0): R;
    allowsAlpha<R = boolean>(): R;
    setAllowsAlpha<R = void, P0 = boolean>(_v: P0): R;
    currentColor<R = NSColor>(): R;
    setCurrentColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace classes {
    export interface NSTouchBarColorPickerViewProtocol<T = any> extends NSObjectProtocol {
      preferredColorSwatchType<R = number>(): R;
    }
  }
}
