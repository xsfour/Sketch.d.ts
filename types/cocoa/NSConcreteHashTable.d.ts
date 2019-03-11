/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteHashTable<T = any> extends cocoa.NSHashTable, cocoa.NSSecureCodingProtocol {
    dealloc<R = void>(): R;
    allObjects<R = unknown>(): R;
    insertItem<R = void, P0 = void>(_insertItem: P0): R;
    rehash<R = void>(): R;
    assign_key<R = void, P0 = number, P1 = void>(_assign: P0, _key: P1): R;
    hashGrow<R = void>(): R;
    rehashAround<R = number, P0 = number>(_rehashAround: P0): R;
    raiseCountUnderflowException<R = void>(): R;
    hash<R = number>(): R;
    count<R = number>(): R;
    pointerFunctions<R = unknown>(): R;
    classForCoder<R = unknown>(): R;
  }
  namespace classes {
    export interface NSConcreteHashTable<T = any> extends cocoa.classes.NSHashTable, cocoa.classes.NSSecureCodingProtocol {
      alloc<R = NSConcreteHashTable>(): R;
      new: <R = NSConcreteHashTable>() => R;
    }
  }
}

declare const NSConcreteHashTable: cocoa.classes.NSConcreteHashTable;
