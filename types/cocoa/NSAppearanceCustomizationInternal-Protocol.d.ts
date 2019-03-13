/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceCustomizationInternalProtocol<T = any> extends NSAppearanceCustomizationProtocol {
    _effectiveAppearanceParent<R = NSAppearanceCustomization>(): R;
  }
  namespace classes {
    export interface NSAppearanceCustomizationInternalProtocol<T = any> extends NSAppearanceCustomizationProtocol {  }
  }
}
