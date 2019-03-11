/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBottomSeparatorConfigurableView<T = any> extends cocoa.MSSeparatorConfigurableView {
    wantsBottomSeparator<R = boolean>(): R;
    setWantsBottomSeparator<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface MSBottomSeparatorConfigurableView<T = any> extends cocoa.classes.MSSeparatorConfigurableView {
      alloc<R = MSBottomSeparatorConfigurableView>(): R;
      new: <R = MSBottomSeparatorConfigurableView>() => R;
    }
  }
}

declare const MSBottomSeparatorConfigurableView: cocoa.classes.MSBottomSeparatorConfigurableView;
