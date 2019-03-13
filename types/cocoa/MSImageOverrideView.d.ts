/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOverrideView<T = any> extends NSImageView {
    cxx_destruct<R = void>(): R;
    removeOverrideImage<R = void, P0 = unknown>(_removeOverrideImage: P0): R;
    placeholderImage<R = NSImage>(): R;
    setPlaceholderImage<R = void, P0 = NSImage>(_v: P0): R;
    displaysPlaceholder<R = boolean>(): R;
  }
  namespace classes {
    export interface MSImageOverrideView<T = any> extends NSImageView {
      alloc<R = MSImageOverrideView>(): R;
      new: <R = MSImageOverrideView>() => R;
    }
  }
}

declare const MSImageOverrideView: cocoa.classes.MSImageOverrideView;
