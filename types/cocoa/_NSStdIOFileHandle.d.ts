/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStdIOFileHandle<T = any> extends cocoa.NSConcreteFileHandle {}
  namespace classes {
    export interface _NSStdIOFileHandle<T = any> extends cocoa.classes.NSConcreteFileHandle {
      alloc<R = _NSStdIOFileHandle>(): R;
      new: <R = _NSStdIOFileHandle>() => R;
    }
  }
}
