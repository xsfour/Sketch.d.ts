/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockActionTarget<T = any> extends cocoa.NSObject {
    receiveAction<R = void, P0 = unknown>(_receiveAction: P0): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSBlockActionTarget<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSBlockActionTarget>(): R;
      new: <R = _NSBlockActionTarget>() => R;
      blockActionTargetWithHandler<R = unknown, P0 = cocoa.CDUnknownBlockType>(_blockActionTargetWithHandler: P0): R;
    }
  }
}
