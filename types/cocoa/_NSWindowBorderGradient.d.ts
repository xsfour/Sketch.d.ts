/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowBorderGradient<T = any> extends NSGradient {
    initFromGrayValue_toGrayValue_colorSpace<R = unknown, P0 = number, P1 = number, P2 = unknown>(_initFromGrayValue: P0, _toGrayValue: P1, _colorSpace: P2): R;
  }
  namespace classes {
    export interface _NSWindowBorderGradient<T = any> extends NSGradient {
      alloc<R = _NSWindowBorderGradient>(): R;
      new: <R = _NSWindowBorderGradient>() => R;
    }
  }
}
