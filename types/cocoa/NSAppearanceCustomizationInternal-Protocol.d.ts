/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppearanceCustomizationInternalProtocol<T = any> extends cocoa.NSAppearanceCustomizationProtocol {
    _effectiveAppearanceParent<R = cocoa.NSAppearanceCustomization>(): R;
  }
  namespace classes {
    export interface NSAppearanceCustomizationInternalProtocol<T = any> extends cocoa.classes.NSAppearanceCustomizationProtocol {  }
  }
}

declare const NSAppearanceCustomizationInternalProtocol: cocoa.classes.NSAppearanceCustomizationInternalProtocol;
