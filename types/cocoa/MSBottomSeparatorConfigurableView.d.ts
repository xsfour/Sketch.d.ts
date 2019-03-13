/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBottomSeparatorConfigurableView<T = any> extends MSSeparatorConfigurableView {
    wantsBottomSeparator<R = boolean>(): R;
    setWantsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSBottomSeparatorConfigurableView<T = any> extends MSSeparatorConfigurableView {
      alloc<R = MSBottomSeparatorConfigurableView>(): R;
      new: <R = MSBottomSeparatorConfigurableView>() => R;
    }
  }
}

declare const MSBottomSeparatorConfigurableView: cocoa.classes.MSBottomSeparatorConfigurableView;
