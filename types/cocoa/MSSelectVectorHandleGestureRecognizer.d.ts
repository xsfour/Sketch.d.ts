/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSelectVectorHandleGestureRecognizer<T = any> extends MSGestureRecognizer {
    modifierFlags<R = number>(): R;
    toggleSelection<R = boolean>(): R;
    delegate<R = MSSelectVectorHandleGestureRecognizerDelegate>(): R;
    setDelegate<R = void, P0 = MSSelectVectorHandleGestureRecognizerDelegate>(_v: P0): R;
  }
  namespace classes {
    export interface MSSelectVectorHandleGestureRecognizer<T = any> extends MSGestureRecognizer {
      alloc<R = MSSelectVectorHandleGestureRecognizer>(): R;
      new: <R = MSSelectVectorHandleGestureRecognizer>() => R;
    }
  }
}

declare const MSSelectVectorHandleGestureRecognizer: cocoa.classes.MSSelectVectorHandleGestureRecognizer;
