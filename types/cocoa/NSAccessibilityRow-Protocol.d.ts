/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRowProtocol<T = any> extends NSAccessibilityGroupProtocol {
    accessibilityIndex<R = number>(): R;
    accessibilityDisclosureLevel<R = number>(): R;
  }
  namespace classes {
    export interface NSAccessibilityRowProtocol<T = any> extends NSAccessibilityGroupProtocol {  }
  }
}
