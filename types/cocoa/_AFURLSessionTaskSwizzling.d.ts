/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _AFURLSessionTaskSwizzling<T = any> extends NSObject {
    af_suspend<R = void>(): R;
    af_resume<R = void>(): R;
    state<R = number>(): R;
  }
  namespace classes {
    export interface _AFURLSessionTaskSwizzling<T = any> extends NSObject {
      alloc<R = _AFURLSessionTaskSwizzling>(): R;
      new: <R = _AFURLSessionTaskSwizzling>() => R;
      swizzleResumeAndSuspendMethodForClass<R = void, P0 = unknown>(_swizzleResumeAndSuspendMethodForClass: P0): R;
      load<R = void>(): R;
    }
  }
}
