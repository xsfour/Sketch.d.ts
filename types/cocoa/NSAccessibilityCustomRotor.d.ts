/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityCustomRotor<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    _defaultLabelForType<R = unknown, P0 = number>(__defaultLabelForType: P0): R;
    dealloc<R = void>(): R;
    initWithLabel_itemSearchDelegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithLabel: P0, _itemSearchDelegate: P1): R;
    initWithRotorType_itemSearchDelegate<R = unknown, P0 = number, P1 = unknown>(_initWithRotorType: P0, _itemSearchDelegate: P1): R;
    type<R = number>(): R;
    setType<R = void, P0 = number>(_v: P0): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    itemLoadingDelegate<R = NSAccessibilityElementLoading>(): R;
    setItemLoadingDelegate<R = void, P0 = NSAccessibilityElementLoading>(_v: P0): R;
    itemSearchDelegate<R = NSAccessibilityCustomRotorItemSearchDelegate>(): R;
    setItemSearchDelegate<R = void, P0 = NSAccessibilityCustomRotorItemSearchDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface NSAccessibilityCustomRotor<T = any> extends NSObject {
      alloc<R = NSAccessibilityCustomRotor>(): R;
      new: <R = NSAccessibilityCustomRotor>() => R;
    }
  }
}

declare const NSAccessibilityCustomRotor: cocoa.classes.NSAccessibilityCustomRotor;
