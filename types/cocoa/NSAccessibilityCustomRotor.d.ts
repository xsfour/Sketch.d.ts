/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomRotor<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    _defaultLabelForType<R = unknown, P0 = number>(__defaultLabelForType: P0): R;
    dealloc<R = void>(): R;
    initWithLabel_itemSearchDelegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithLabel: P0, _itemSearchDelegate: P1): R;
    initWithRotorType_itemSearchDelegate<R = unknown, P0 = number, P1 = unknown>(_initWithRotorType: P0, _itemSearchDelegate: P1): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    label<R = cocoa.NSString>(): R;
    setLabel<R = void, P0 = cocoa.NSString>(_v: P0): R;
    itemLoadingDelegate<R = cocoa.NSAccessibilityElementLoading>(): R;
    setItemLoadingDelegate<R = void, P0 = cocoa.NSAccessibilityElementLoading>(_v: P0): R;
    itemSearchDelegate<R = cocoa.NSAccessibilityCustomRotorItemSearchDelegate>(): R;
    setItemSearchDelegate<R = void, P0 = cocoa.NSAccessibilityCustomRotorItemSearchDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomRotor<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSAccessibilityCustomRotor>(): R;
      new: <R = NSAccessibilityCustomRotor>() => R;
    }
  }
}

declare const NSAccessibilityCustomRotor: cocoa.classes.NSAccessibilityCustomRotor;
