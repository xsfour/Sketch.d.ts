/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSKeyedCoderOldStyleArray<T = any> extends cocoa.NSObject {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    fillObjCType_count_at<R = void, P0 = boolean, P1 = number, P2 = void>(_fillObjCType: P0, _count: P1, _at: P2): R;
    dealloc<R = void>(): R;
    initWithObjCType_count_at<R = unknown, P0 = boolean, P1 = number, P2 = void>(_initWithObjCType: P0, _count: P1, _at: P2): R;
  }
  namespace classes {
    export interface _NSKeyedCoderOldStyleArray<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSKeyedCoderOldStyleArray>(): R;
      new: <R = _NSKeyedCoderOldStyleArray>() => R;
    }
  }
}
