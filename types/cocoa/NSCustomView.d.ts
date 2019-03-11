/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomView<T = any> extends cocoa.NSView {
    setClassName<R = void, P0 = unknown>(_setClassName: P0): R;
    className<R = unknown>(): R;
    nibInstantiateWithObjectInstantiator<R = unknown, P0 = unknown>(_nibInstantiateWithObjectInstantiator: P0): R;
    _descendantIsConstrainedByConstraint<R = boolean, P0 = unknown>(__descendantIsConstrainedByConstraint: P0): R;
    _setAsClipViewDocumentViewIfNeeded<R = void>(): R;
  }
  namespace classes {
    export interface NSCustomView<T = any> extends cocoa.classes.NSView {
      alloc<R = NSCustomView>(): R;
      new: <R = NSCustomView>() => R;
    }
  }
}

declare const NSCustomView: cocoa.classes.NSCustomView;
