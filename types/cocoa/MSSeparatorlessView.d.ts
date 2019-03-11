/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorlessView<T = any> extends cocoa.NSView {
    wantsSeparator<R = boolean>(): R;
  }
  namespace classes {
    export interface MSSeparatorlessView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSSeparatorlessView>(): R;
      new: <R = MSSeparatorlessView>() => R;
    }
  }
}

declare const MSSeparatorlessView: cocoa.classes.MSSeparatorlessView;
