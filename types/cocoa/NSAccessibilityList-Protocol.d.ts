/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityListProtocol<T = any> extends cocoa.NSAccessibilityTableProtocol {}
  namespace classes {
    export interface NSAccessibilityListProtocol<T = any> extends cocoa.classes.NSAccessibilityTableProtocol {  }
  }
}

declare const NSAccessibilityListProtocol: cocoa.classes.NSAccessibilityListProtocol;
