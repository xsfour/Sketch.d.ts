/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStatusItemPoofAnimator<T = any> extends cocoa.NSPanel {
    startAnimatingWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_startAnimatingWithCompletionHandler: P0): R;
    initForAnimatingWindow<R = unknown, P0 = unknown>(_initForAnimatingWindow: P0): R;
    initWithStatusItem<R = unknown, P0 = unknown>(_initWithStatusItem: P0): R;
    _generateSnapshotForWindow<R = unknown, P0 = unknown>(__generateSnapshotForWindow: P0): R;
  }
  namespace classes {
    export interface _NSStatusItemPoofAnimator<T = any> extends cocoa.classes.NSPanel {
      alloc<R = _NSStatusItemPoofAnimator>(): R;
      new: <R = _NSStatusItemPoofAnimator>() => R;
    }
  }
}
