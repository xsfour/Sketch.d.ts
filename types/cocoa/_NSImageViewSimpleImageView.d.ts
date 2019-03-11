/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSImageViewSimpleImageView<T = any> extends cocoa._NSSimpleImageView {
    cxx_destruct<R = void>(): R;
    backgroundStyle<R = number>(): R;
    tintColor<R = unknown>(): R;
    state<R = number>(): R;
    image<R = unknown>(): R;
    userInterfaceLayoutDirection<R = number>(): R;
    allowsVibrancy<R = boolean>(): R;
    initWithFrame_ownerView<R = unknown, P0 = cocoa.CGRect, P1 = unknown>(_initWithFrame: P0, _ownerView: P1): R;
  }
  namespace classes {
    export interface _NSImageViewSimpleImageView<T = any> extends cocoa.classes._NSSimpleImageView {
      alloc<R = _NSImageViewSimpleImageView>(): R;
      new: <R = _NSImageViewSimpleImageView>() => R;
    }
  }
}
