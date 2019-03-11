/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAccessibilityOverriddenAttributeUIElementValue<T = any> extends cocoa.NSObject {
    UIElementValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithUIElementValue<R = unknown, P0 = unknown>(_initWithUIElementValue: P0): R;
  }
  namespace classes {
    export interface _NSAccessibilityOverriddenAttributeUIElementValue<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSAccessibilityOverriddenAttributeUIElementValue>(): R;
      new: <R = _NSAccessibilityOverriddenAttributeUIElementValue>() => R;
    }
  }
}
