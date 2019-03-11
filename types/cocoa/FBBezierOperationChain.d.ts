/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierOperationChain<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    enumerateWithBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_enumerateWithBlock: P0): R;
    saveWithName<R = void, P0 = unknown>(_saveWithName: P0): R;
    archive<R = unknown>(): R;
    appendBezierPath_withOperation<R = void, P0 = unknown, P1 = number>(_appendBezierPath: P0, _withOperation: P1): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithBezierPath<R = unknown, P0 = unknown>(_initWithBezierPath: P0): R;
  }
  namespace classes {
    export interface FBBezierOperationChain<T = any> extends cocoa.classes.NSObject {
      alloc<R = FBBezierOperationChain>(): R;
      new: <R = FBBezierOperationChain>() => R;
    }
  }
}

declare const FBBezierOperationChain: cocoa.classes.FBBezierOperationChain;
