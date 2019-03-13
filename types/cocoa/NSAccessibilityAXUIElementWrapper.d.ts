/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityAXUIElementWrapper<T = any> extends NSObject {
    hash<R = number>(): R;
    accessibilityTopLevelUIElementAttributeValueHelper<R = unknown>(): R;
    accessibilityWindowAttributeValueHelper<R = unknown>(): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    AXUIElement<R = __AXUIElement>(): R;
    dealloc<R = void>(): R;
    initWithAXUIElement<R = unknown, P0 = __AXUIElement>(_initWithAXUIElement: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityAXUIElementWrapper<T = any> extends NSObject {
      alloc<R = NSAccessibilityAXUIElementWrapper>(): R;
      new: <R = NSAccessibilityAXUIElementWrapper>() => R;
    }
  }
}

declare const NSAccessibilityAXUIElementWrapper: cocoa.classes.NSAccessibilityAXUIElementWrapper;
