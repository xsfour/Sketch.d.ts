/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentMatch<T = any> extends NSObject, NSInputAlignmentMatchProtocol {
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSInputAlignmentMatch<T = any> extends NSObject, NSInputAlignmentMatchProtocol {
      alloc<R = _NSInputAlignmentMatch>(): R;
      new: <R = _NSInputAlignmentMatch>() => R;
    }
  }
}
