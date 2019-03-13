/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorlessFlippedView<T = any> extends MSSeparatorlessView {
    isFlipped<R = boolean>(): R;
  }
  namespace classes {
    export interface MSSeparatorlessFlippedView<T = any> extends MSSeparatorlessView {
      alloc<R = MSSeparatorlessFlippedView>(): R;
      new: <R = MSSeparatorlessFlippedView>() => R;
    }
  }
}

declare const MSSeparatorlessFlippedView: cocoa.classes.MSSeparatorlessFlippedView;
