/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectVectorHandleGestureRecognizer<T = any> extends cocoa.MSGestureRecognizer {
    modifierFlags<R = number>(): R;
    toggleSelection<R = boolean>(): R;
    delegate<R = cocoa.MSSelectVectorHandleGestureRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.MSSelectVectorHandleGestureRecognizerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSSelectVectorHandleGestureRecognizer<T = any> extends cocoa.classes.MSGestureRecognizer {
      alloc<R = MSSelectVectorHandleGestureRecognizer>(): R;
      new: <R = MSSelectVectorHandleGestureRecognizer>() => R;
    }
  }
}

declare const MSSelectVectorHandleGestureRecognizer: cocoa.classes.MSSelectVectorHandleGestureRecognizer;
