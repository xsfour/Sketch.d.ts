/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAcceleratorGestureRecognizer<T = any> extends NSGestureRecognizer, NSCodingProtocol {
    stage<R = number>(): R;
    pressure<R = number>(): R;
  }
  namespace classes {
    export interface NSAcceleratorGestureRecognizer<T = any> extends NSGestureRecognizer, NSCodingProtocol {
      alloc<R = NSAcceleratorGestureRecognizer>(): R;
      new: <R = NSAcceleratorGestureRecognizer>() => R;
    }
  }
}

declare const NSAcceleratorGestureRecognizer: cocoa.classes.NSAcceleratorGestureRecognizer;
