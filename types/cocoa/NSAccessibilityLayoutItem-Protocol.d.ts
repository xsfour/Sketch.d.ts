/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityLayoutItemProtocol<T = any> extends NSAccessibilityGroupProtocol {
    setAccessibilityFrame<R = void, P0 = CGRect>(_setAccessibilityFrame: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityLayoutItemProtocol<T = any> extends NSAccessibilityGroupProtocol {  }
  }
}
