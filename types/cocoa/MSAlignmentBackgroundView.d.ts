/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentBackgroundView<T = any> extends NSView {}
  namespace classes {
    export interface MSAlignmentBackgroundView<T = any> extends NSView {
      alloc<R = MSAlignmentBackgroundView>(): R;
      new: <R = MSAlignmentBackgroundView>() => R;
    }
  }
}

declare const MSAlignmentBackgroundView: cocoa.classes.MSAlignmentBackgroundView;
