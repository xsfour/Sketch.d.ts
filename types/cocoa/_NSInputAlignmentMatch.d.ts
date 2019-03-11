/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSInputAlignmentMatch<T = any> extends cocoa.NSObject, cocoa.NSInputAlignmentMatchProtocol {
    dealloc<R = void>(): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface _NSInputAlignmentMatch<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSInputAlignmentMatchProtocol {
      alloc<R = _NSInputAlignmentMatch>(): R;
      new: <R = _NSInputAlignmentMatch>() => R;
    }
  }
}
