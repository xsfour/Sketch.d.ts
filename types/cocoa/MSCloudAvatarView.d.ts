/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudAvatarView<T = any> extends cocoa.NSView {
    cxx_destruct<R = void>(): R;
    loadAvatar<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    loadView<R = void>(): R;
    imageView<R = cocoa.NSImageView>(): R;
    setImageView<R = void, P0 = cocoa.NSImageView>(_v: P0): R;
    avatar<R = cocoa.SCKAvatar>(): R;
    setAvatar<R = void, P0 = cocoa.SCKAvatar>(_v: P0): R;
  }
  namespace classes {
    export interface MSCloudAvatarView<T = any> extends cocoa.classes.NSView {
      alloc<R = MSCloudAvatarView>(): R;
      new: <R = MSCloudAvatarView>() => R;
    }
  }
}

declare const MSCloudAvatarView: cocoa.classes.MSCloudAvatarView;
