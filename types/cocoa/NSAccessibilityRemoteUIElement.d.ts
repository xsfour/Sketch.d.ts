/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityRemoteUIElement<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
    accessibilityHitTest<R = unknown, P0 = CGPoint>(_accessibilityHitTest: P0): R;
    processIdentifier<R = number>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityIsAttributeSettable<R = boolean, P0 = unknown>(_accessibilityIsAttributeSettable: P0): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    AXUIElement<R = __AXUIElement>(): R;
    dealloc<R = void>(): R;
    initWithRemoteToken<R = unknown, P0 = unknown>(_initWithRemoteToken: P0): R;
    initWithAXUIElement<R = unknown, P0 = __AXUIElement>(_initWithAXUIElement: P0): R;
    presenterView<R = NSView>(): R;
    setPresenterView<R = void, P0 = NSView>(_v: P0): R;
    topLevelUIElement<R = unknown>(): R;
    setTopLevelUIElement<R = void, P0 = unknown>(_v: P0): R;
    windowUIElement<R = unknown>(): R;
    setWindowUIElement<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityRemoteUIElement<T = any> extends NSObject {
      alloc<R = NSAccessibilityRemoteUIElement>(): R;
      new: <R = NSAccessibilityRemoteUIElement>() => R;
      unregisterRemoteUIProcessIdentifier<R = void, P0 = number>(_unregisterRemoteUIProcessIdentifier: P0): R;
      registerRemoteUIProcessIdentifier<R = void, P0 = number>(_registerRemoteUIProcessIdentifier: P0): R;
      remoteTokenForLocalUIElement<R = unknown, P0 = unknown>(_remoteTokenForLocalUIElement: P0): R;
      setRemoteUIApp<R = void, P0 = boolean>(_setRemoteUIApp: P0): R;
      isRemoteUIApp<R = boolean>(): R;
    }
  }
}

declare const NSAccessibilityRemoteUIElement: cocoa.classes.NSAccessibilityRemoteUIElement;
