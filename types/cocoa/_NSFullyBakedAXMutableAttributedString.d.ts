/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullyBakedAXMutableAttributedString<T = any> extends cocoa.NSMutableAttributedString {
    string<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithAttributedString<R = unknown, P0 = unknown>(_initWithAttributedString: P0): R;
  }
  namespace classes {
    export interface _NSFullyBakedAXMutableAttributedString<T = any> extends cocoa.classes.NSMutableAttributedString {
      alloc<R = _NSFullyBakedAXMutableAttributedString>(): R;
      new: <R = _NSFullyBakedAXMutableAttributedString>() => R;
    }
  }
}
