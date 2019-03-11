/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSharedValueTransformer<T = any> extends cocoa.NSValueTransformer {
    _isBooleanTransformer<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = cocoa._NSZone>(_copyWithZone: P0): R;
    copy<R = unknown>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace classes {
    export interface _NSSharedValueTransformer<T = any> extends cocoa.classes.NSValueTransformer {
      alloc<R = _NSSharedValueTransformer>(): R;
      new: <R = _NSSharedValueTransformer>() => R;
    }
  }
}
