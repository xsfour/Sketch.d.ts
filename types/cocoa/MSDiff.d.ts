/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDiff<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    overlayDirtyDiffRectForPage<R = CGRect, P0 = unknown>(_overlayDirtyDiffRectForPage: P0): R;
    contentDirtyDiffRectForPage<R = CGRect, P0 = unknown>(_contentDirtyDiffRectForPage: P0): R;
    initWithFirstObjectRoot_secondObjectRoot<R = unknown, P0 = unknown, P1 = unknown>(_initWithFirstObjectRoot: P0, _secondObjectRoot: P1): R;
    secondObjectRoot<R = MSSubtreeRoot>(): R;
    setSecondObjectRoot<R = void, P0 = MSSubtreeRoot>(_v: P0): R;
    firstObjectRoot<R = MSSubtreeRoot>(): R;
    setFirstObjectRoot<R = void, P0 = MSSubtreeRoot>(_v: P0): R;
  }
  namespace classes {
    export interface MSDiff<T = any> extends NSObject {
      alloc<R = MSDiff>(): R;
      new: <R = MSDiff>() => R;
    }
  }
}

declare const MSDiff: cocoa.classes.MSDiff;
