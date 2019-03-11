/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemView<T = any> extends cocoa.NSTouchBarItemContainerView {}
  namespace classes {
    export interface NSTouchBarItemView<T = any> extends cocoa.classes.NSTouchBarItemContainerView {
      alloc<R = NSTouchBarItemView>(): R;
      new: <R = NSTouchBarItemView>() => R;
    }
  }
}

declare const NSTouchBarItemView: cocoa.classes.NSTouchBarItemView;
