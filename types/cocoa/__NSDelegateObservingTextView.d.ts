/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface __NSDelegateObservingTextView<T = any> extends NSTextView {
    initWithController<R = unknown, P0 = unknown>(_initWithController: P0): R;
  }
  namespace classes {
    export interface __NSDelegateObservingTextView<T = any> extends NSTextView {
      alloc<R = __NSDelegateObservingTextView>(): R;
      new: <R = __NSDelegateObservingTextView>() => R;
    }
  }
}
