/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionInvocationRequestor<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithItemSource_servicesRequestor_items_allowsEditors<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_initWithItemSource: P0, _servicesRequestor: P1, _items: P2, _allowsEditors: P3): R;
    allowsEditors<R = boolean>(): R;
    items<R = NSArray>(): R;
    servicesRequestor<R = NSServicesRequestor>(): R;
    itemSource<R = _NSQuickActionItemSource>(): R;
  }
  namespace classes {
    export interface _NSExtensionQuickActionInvocationRequestor<T = any> extends NSObject {
      alloc<R = _NSExtensionQuickActionInvocationRequestor>(): R;
      new: <R = _NSExtensionQuickActionInvocationRequestor>() => R;
    }
  }
}
