/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOverrideView<T = any> extends cocoa.NSImageView {
    cxx_destruct<R = void>(): R;
    removeOverrideImage<R = void, P0 = unknown>(_removeOverrideImage: P0): R;
    placeholderImage<R = cocoa.NSImage>(): R;
    setPlaceholderImage<R = void, P0 = cocoa.NSImage>(_v: P0): R;
    displaysPlaceholder<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImageOverrideView<T = any> extends cocoa.classes.NSImageView {
      alloc<R = MSImageOverrideView>(): R;
      new: <R = MSImageOverrideView>() => R;
    }
  }
}

declare const MSImageOverrideView: cocoa.classes.MSImageOverrideView;
