/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityProxy<T = any> extends cocoa.NSObject {
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = cocoa.CGPoint>(_accessibilityHitTest: P0): R;
    _proxyForUIElement<R = unknown, P0 = unknown>(__proxyForUIElement: P0): R;
    accessibilityFocusRingBoundsForBounds<R = cocoa.CGRect, P0 = cocoa.CGRect>(_accessibilityFocusRingBoundsForBounds: P0): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityAttributeValue_forParameter<R = unknown, P0 = unknown, P1 = unknown>(_accessibilityAttributeValue: P0, _forParameter: P1): R;
    accessibilityParameterizedAttributeNames<R = unknown>(): R;
    accessibilitySetValue_forAttribute<R = void, P0 = unknown, P1 = unknown>(_accessibilitySetValue: P0, _forAttribute: P1): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    _proxyParentedChild<R = unknown, P0 = unknown>(__proxyParentedChild: P0): R;
    accessibilityFocusedAttribute<R = unknown>(): R;
    accessibilityOverriddenAttributes<R = unknown>(): R;
    accessibilityAttributeNames<R = unknown>(): R;
    hash<R = number>(): R;
    realElement<R = unknown>(): R;
  }
  namespace classes {
    export interface NSAccessibilityProxy<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityProxy>(): R;
      new: <R = NSAccessibilityProxy>() => R;
    }
  }
}

declare const NSAccessibilityProxy: cocoa.classes.NSAccessibilityProxy;
