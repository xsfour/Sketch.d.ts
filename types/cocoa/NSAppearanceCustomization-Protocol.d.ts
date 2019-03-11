/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceCustomizationProtocol<T = any> extends cocoa.NSObjectProtocol {
    effectiveAppearance<R = cocoa.NSAppearance>(): R;
    appearance<R = cocoa.NSAppearance>(): R;
    setAppearance<R = void, P0 = cocoa.NSAppearance>(_v: P0): R;
  }
  namespace classes {
    export interface NSAppearanceCustomizationProtocol<T = any> extends cocoa.classes.NSObjectProtocol {  }
  }
}

declare const NSAppearanceCustomizationProtocol: cocoa.classes.NSAppearanceCustomizationProtocol;
