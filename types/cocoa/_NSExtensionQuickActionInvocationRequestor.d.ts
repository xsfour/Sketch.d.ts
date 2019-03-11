/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionInvocationRequestor<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithItemSource_servicesRequestor_items_allowsEditors<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(_initWithItemSource: P0, _servicesRequestor: P1, _items: P2, _allowsEditors: P3): R;
    allowsEditors<R = boolean>(): R;
    items<R = cocoa.NSArray>(): R;
    servicesRequestor<R = cocoa.NSServicesRequestor>(): R;
    itemSource<R = cocoa._NSQuickActionItemSource>(): R;
  }
  namespace classes {
    export interface _NSExtensionQuickActionInvocationRequestor<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSExtensionQuickActionInvocationRequestor>(): R;
      new: <R = _NSExtensionQuickActionInvocationRequestor>() => R;
    }
  }
}
