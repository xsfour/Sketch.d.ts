/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISIconImageRep<T = any> extends NSImageRep {
    _wantsToBeCached<R = boolean>(): R;
    initWithIcon_size_scale_appearanceName<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_initWithIcon: P0, _size: P1, _scale: P2, _appearanceName: P3): R;
  }
  namespace classes {
    export interface NSISIconImageRep<T = any> extends NSImageRep {
      alloc<R = NSISIconImageRep>(): R;
      new: <R = NSISIconImageRep>() => R;
    }
  }
}

declare const NSISIconImageRep: cocoa.classes.NSISIconImageRep;
