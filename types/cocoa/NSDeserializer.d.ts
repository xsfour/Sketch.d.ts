/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeserializer<T = any> extends cocoa.NSObject {}
  namespace classes {
    export interface NSDeserializer<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSDeserializer>(): R;
      new: <R = NSDeserializer>() => R;
      deserializePropertyListLazilyFromData_atCursor_length_mutableContainers<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = boolean>(_deserializePropertyListLazilyFromData: P0, _atCursor: P1, _length: P2, _mutableContainers: P3): R;
      deserializePropertyListFromData_atCursor_mutableContainers<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_deserializePropertyListFromData: P0, _atCursor: P1, _mutableContainers: P2): R;
      deserializePropertyListFromData_mutableContainers<R = unknown, P0 = unknown, P1 = boolean>(_deserializePropertyListFromData: P0, _mutableContainers: P1): R;
    }
  }
}

declare const NSDeserializer: cocoa.classes.NSDeserializer;
