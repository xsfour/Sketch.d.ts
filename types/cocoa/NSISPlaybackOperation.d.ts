/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISPlaybackOperation<T = any> extends cocoa.NSObject, cocoa.NSISVariableDelegateProtocol {
    _addToEngine<R = void, P0 = unknown>(__addToEngine: P0): R;
    secondAnchor<R = unknown>(): R;
    firstAnchor<R = unknown>(): R;
    secondItem<R = unknown>(): R;
    firstItem<R = unknown>(): R;
    playbackOneAction_onEngine<R = void, P0 = unknown, P1 = unknown>(_playbackOneAction: P0, _onEngine: P1): R;
    dealloc<R = void>(): R;
    unwrapLinearExpression_onEngine<R = unknown, P0 = unknown, P1 = unknown>(_unwrapLinearExpression: P0, _onEngine: P1): R;
    unwrapVariable<R = unknown, P0 = unknown>(_unwrapVariable: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSISPlaybackOperation<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSISVariableDelegateProtocol {
      alloc<R = NSISPlaybackOperation>(): R;
      new: <R = NSISPlaybackOperation>() => R;
    }
  }
}

declare const NSISPlaybackOperation: cocoa.classes.NSISPlaybackOperation;
