/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSerializer<T = any> extends NSObject {}
  namespace classes {
    export interface NSSerializer<T = any> extends NSObject {
      alloc<R = NSSerializer>(): R;
      new: <R = NSSerializer>() => R;
      serializePropertyList<R = unknown, P0 = unknown>(_serializePropertyList: P0): R;
      serializePropertyList_intoData<R = void, P0 = unknown, P1 = unknown>(_serializePropertyList: P0, _intoData: P1): R;
    }
  }
}

declare const NSSerializer: cocoa.classes.NSSerializer;
