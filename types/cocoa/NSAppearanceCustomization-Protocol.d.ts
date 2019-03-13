/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceCustomizationProtocol<T = any> extends NSObjectProtocol {
    effectiveAppearance<R = NSAppearance>(): R;
    appearance<R = NSAppearance>(): R;
    setAppearance<R = void, P0 = NSAppearance>(_v: P0): R;
  }
  namespace classes {
    export interface NSAppearanceCustomizationProtocol<T = any> extends NSObjectProtocol {  }
  }
}
