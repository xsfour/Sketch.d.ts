/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLegacyExternalColorPickerHostViewControllerProtocol<T = any> {
    pickColor<R = void, P0 = cocoa.NSColor>(_pickColor: P0): R;
  }
  namespace classes {
    export interface NSLegacyExternalColorPickerHostViewControllerProtocol<T = any> {  }
  }
}

declare const NSLegacyExternalColorPickerHostViewControllerProtocol: cocoa.classes.NSLegacyExternalColorPickerHostViewControllerProtocol;
