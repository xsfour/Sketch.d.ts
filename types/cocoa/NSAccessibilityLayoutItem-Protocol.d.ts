/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityLayoutItemProtocol<T = any> extends cocoa.NSAccessibilityGroupProtocol {
    setAccessibilityFrame<R = void, P0 = cocoa.CGRect>(_setAccessibilityFrame: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityLayoutItemProtocol<T = any> extends cocoa.classes.NSAccessibilityGroupProtocol {  }
  }
}

declare const NSAccessibilityLayoutItemProtocol: cocoa.classes.NSAccessibilityLayoutItemProtocol;
