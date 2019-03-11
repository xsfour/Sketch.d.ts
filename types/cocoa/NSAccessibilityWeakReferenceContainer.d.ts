/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityWeakReferenceContainer<T = any> extends cocoa.NSObject, cocoa.NSCopyingProtocol {
    hash<R = number>(): R;
    strongReference<R = unknown>(): R;
    autoreleasedReference<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityWeakReferenceContainer<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCopyingProtocol {
      alloc<R = NSAccessibilityWeakReferenceContainer>(): R;
      new: <R = NSAccessibilityWeakReferenceContainer>() => R;
    }
  }
}

declare const NSAccessibilityWeakReferenceContainer: cocoa.classes.NSAccessibilityWeakReferenceContainer;
