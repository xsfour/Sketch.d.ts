/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTimerBlockTarget<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    fire<R = void, P0 = unknown>(_fire: P0): R;
    initWithBlock<R = unknown, P0 = cocoa.CDUnknownBlockType>(_initWithBlock: P0): R;
  }
  namespace classes {
    export interface _NSTimerBlockTarget<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSTimerBlockTarget>(): R;
      new: <R = _NSTimerBlockTarget>() => R;
    }
  }
}
